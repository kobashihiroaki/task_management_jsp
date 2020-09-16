<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>タスク管理アプリ会員登録</title>

    <link href="./css/login.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="form-content">
        <div class="form-main">
            <h1>タスク管理アプリ</h1>
            <p>任意のユーザーIDとパスワードを入力してください。</p>
            <form class="form" method="post" action="">
                <input type="text" id="login-id" placeholder="ユーザーID （半角英数字8文字以上）" maxlength="30">
                <input type="password" id="login-password" placeholder="パスワード （半角英数字8文字以上）" maxlength="30">
                <input type="password" id="same-login-password" placeholder="パスワード （確認用）" maxlength="30">
                <button id="sign-up-button" class="button" type="button">会員登録</button>
            </form>
            <p class="question">既にアカウントをお持ちですか？</p>
            <a href="./login.jsp">ログイン</a>
        </div>
    </div>
    <script type="text/javascript" src="./js/sign-up.js" ></script>
</body>
</html>