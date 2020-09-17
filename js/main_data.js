let user_data;
//画面読み込み時
document.addEventListener('DOMContentLoaded', function () {
	if (sessionStorage.getItem('user_data') == null) {
		location.href = "./login.jsp";
	} else {
		user_data = JSON.parse(sessionStorage.getItem('user_data'));
		console.log(user_data);
		let user_name = document.getElementById("user-name");
		user_name.textContent = "ようこそ" + user_data["login_id"] + "さん";

		let userData = {};
		let user_id = user_data["id"];
		userData = {
			action: "select",
			user_id: user_id
		}

		const requestUrl = "main";
		fetch(requestUrl, {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	    .then (response => {
	    	console.log("ok");
	    	return response.json();
	    })
	    .then (json => {
	    	console.log(json);
	    	//タスクを表示
	    	let tasks = document.getElementById("tasks");
	    	//外枠を作る
	    	for (let i = 0; i < json.length; i++) {
	    		tasks.insertAdjacentHTML('afterbegin', "<div onclick='edit_task();' name='task' class='task'><textarea name='task-title' class='task-title'></textarea><textarea name='task-content' class='task-content'></textarea></div>");
	    	}

	    	let task = document.getElementsByName("task");
	    	let task_title = document.getElementsByName("task-title");
	    	let task_content = document.getElementsByName("task-content");
	    	//タスクを入れる
	    	for (let i = 0; i < json.length; i++) {
	    		task[i].setAttribute("value", json[i]["id"]);
		    	task_title[i].value = json[i]["title"];
		    	task_content[i].value = json[i]["content"];
	    	}
	    })
	    .catch(e => {
	        alert("エラー");
	    })
	}
});

document.getElementById("logout").addEventListener('click', function() {
	sessionStorage.removeItem('user_data');
	location.href = "./login.jsp";
});

//タスクの入力
function task_insert() {
	let task_data = {};
	let user_id = user_data["id"];
	let title = document.getElementById("input-title").value;
	let content = document.getElementById("input-content").value;

	task_data = {
		action: "insert",
		obj: {
			user_id: user_id,
			title: title,
			content: content
		}
	}
	console.log(JSON.stringify(task_data));

	if (title === "" && content === "") {
		return;
	}

	const requestUrl = "main";

	fetch(requestUrl, {
		method: "POST",
		body: JSON.stringify(task_data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
    .then (response => {
    	console.log("ok");
    	return response.json();
    })
    .then (json => {
    	console.log(json);
    })
    .catch(e => {
        alert("エラー");
    })
}