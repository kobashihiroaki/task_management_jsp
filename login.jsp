<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>タスク管理アプリログイン</title>

    <link href="./css/login.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="form-content">
        <div class="form-main">
            <h1>タスク管理アプリ</h1>
            <p>ユーザーIDとパスワードを入力してください。</p>
            <form class="form" method="post">
                <input type="text" id="login-id" name="login-id" placeholder="ユーザーID" maxlength="30">
                <input type="password" id="login-password" name="login-password" placeholder="パスワード" maxlength="30">
                <button id="login-button" class="button" type="button">ログイン</button>
            </form>
            <p class="question">アカウントをお持ちではありませんか？</p>
            <a href="./sign-up.jsp">アカウントを作成</a>
        </div>
    </div>
    <script type="text/javascript" src="./js/login.js" ></script>
</body>
</html>