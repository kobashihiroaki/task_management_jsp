document.getElementById("sign-up-button").addEventListener("click", function() {
	let new_user_data = {};
	let login_id = document.getElementById("login-id").value;
	let login_password = document.getElementById("login-password").value;
	let same_login_password = document.getElementById("same-login-password").value;
	let error = "";

	new_user_data = {
		login_id: login_id,
		login_password: login_password
	}

	//バリデーション処理
	if (login_id === "") {
		error += "ユーザーIDを入力してください。\n";
	}
	if (login_password === "") {
		error += "パスワードを入力してください。\n";
	}
	if (same_login_password === "") {
		error += "確認用パスワードを入力してください。\n";
	}
	if (login_id !== "" && login_id.match(/^([a-zA-Z0-9]{8,})$/) === null) {
		error += "ユーザーIDは半角英数字８文字以上で入力してください。\n";
	}
	if (login_password !== "" && login_password.match(/^([a-zA-Z0-9]{8,})$/) === null) {
		error += "パスワードは半角英数字８文字以上で入力してください。\n";
	}
	if (login_password !== same_login_password) {
		error += "パスワードが確認用パスワードと一致していません。\n";
	}
	if (error !== "") {
		error = error.trim();
		alert(error);
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
    	if (json["success"] == "1") {
    		alert("登録済みのユーザーIDです。");
    	} else {
    		alert("会員登録が成功しました。");
    		location.href = "./login.jsp";
    	}
    })
    .catch(e => {
        alert("エラー");
    })
});