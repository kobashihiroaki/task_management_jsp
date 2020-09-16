document.getElementById("sign-up-button").addEventListener("click", function() {
	let new_user_data = {};
	let login_id = document.getElementById("login-id").value;
	let login_password = document.getElementById("login-password").value;
	let same_login_password = document.getElementById("same-login-password").value;

	new_user_data = {
		login_id: login_id,
		login_password: login_password
	}

	if (login_password != same_login_password) {
		alert("パスワードが確認用パスワードと一致していません。");
		return;
	}
	console.log(JSON.stringify(new_user_data));
	const requestUrl = "sign_up";

	fetch(requestUrl, {
		method: "POST",
		body: JSON.stringify(new_user_data),
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
});