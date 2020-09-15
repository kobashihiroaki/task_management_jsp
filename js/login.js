//画面読み込み時
document.addEventListener('DOMContentLoaded', function () {
	if (sessionStorage.getItem('user_data') != null) {
		location.href = "./main.jsp";
	}
});

document.getElementById("login-button").addEventListener("click", function() {
	let user_data = {};
	user_data = {
		login_id: document.getElementById("login-id").value,
		login_password: document.getElementById("login-password").value
	}
	console.log(JSON.stringify(user_data));
	const requestUrl = "login";

	fetch(requestUrl, {
		method: "POST",
		body: JSON.stringify(user_data),
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
    	if (json["login_id"] != null) {
    		sessionStorage.setItem('user_data', JSON.stringify(json));
    		location.href = "./main.jsp";
    	} else {
    		location.href = "./login.jsp";
    	}
    })
    .catch(e => {
        alert("エラー");
    })
});