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