//画面読み込み時
document.addEventListener('DOMContentLoaded', function () {
	if (sessionStorage.getItem('user_data') == null) {
		location.href = "./login.jsp";
	} else {
		let user_data = JSON.parse(sessionStorage.getItem('user_data'));
		console.log(user_data);
	}
});

document.getElementById("logout").addEventListener('click', function() {
	sessionStorage.removeItem('user_data');
	location.href = "./login.jsp";
});