let user_data;
let task_id;
let task_data = {};
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
	    	sessionStorage.setItem('task_data', JSON.stringify(json));
	    	let tasks = document.getElementById("tasks");
	    	//外枠を作る
	    	for (let i = 0; i < json.length; i++) {
	    		tasks.insertAdjacentHTML('beforeend', "<div onclick='show_task(" + i + ");' name='task' class='task'><textarea name='task-title' class='task-title'></textarea><textarea name='task-content' class='task-content'></textarea></div>");
	    	}

	    	let task = document.getElementsByName("task");
	    	let task_title = document.getElementsByName("task-title");
	    	let task_content = document.getElementsByName("task-content");
	    	//タスクを入れる
	    	for (let i = 0; i < json.length; i++) {
	    		task[i].insertAdjacentHTML('afterbegin', "<div class='delete-button'><button onclick='remove_task(" + i + ");'>×</button></div>");
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

// タスクを開く
function show_task(i) {
    if(form_flag === "input") {
      return;
    }
    event.stopPropagation();
    gray.style.display = 'flex';
    form_flag = "edit";

    task_data = JSON.parse(sessionStorage.getItem('task_data'));
    //タスクを表示
    let task = task_data[i];
    task_id = task_data[i]["id"];
    console.log(task);

    let task_title = document.getElementById("task-title");
    let task_content = document.getElementById("task-content");

    task_title.value = task["title"];
    task_content.value = task["content"];

    document.addEventListener("click", form_close);
}

//タスクを編集
function update_task() {
	console.log(task_id);
	let title = document.getElementById("task-title").value;
	let content = document.getElementById("task-content").value;
	task_data = {
		action: "update",
		obj: {
			task_id: task_id,
			title: title,
			content: content
		}
	}
	console.log(JSON.stringify(task_data));
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

//タスクを削除
function delete_task() {
	event.stopPropagation();

    console.log(task_id);

	task_data = {
		action: "delete",
		task_id: task_id
	}
	console.log(JSON.stringify(task_data));
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
    location.href = "./main.jsp";
}

//タスクを削除
function remove_task(i) {
	event.stopPropagation();
	task_data = JSON.parse(sessionStorage.getItem('task_data'));
    task_id = task_data[i]["id"];

    console.log(task_id);

	task_data = {
		action: "delete",
		task_id: task_id
	}
	console.log(JSON.stringify(task_data));
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
    location.href = "./main.jsp";
}