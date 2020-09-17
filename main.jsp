<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>タスク管理アプリメイン画面</title>
    <link href="./css/main.css" rel="stylesheet" type="text/css" />
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
</head>
<body>
     <div class="main">
       <div id="gray" class="gray">
         <div id="task-edit" class="task-edit">
             <textarea class="task-title">帰りにやること</textarea>
             <textarea class="task-content">ガソリンを入れる</textarea>
             <div class="task-button" contenteditable="false">
                 <button><i class="fas fa-palette"></i></button>
                 <button><i class="far fa-image"></i></button>
                 <button id="close-task" class="close-form">閉じる</button>
             </div>
         </div>
       </div>
       <div class="menu">
           <h1>タスク管理アプリ</h1>
           <div class="user">
               <p id="user-name" class="user-name"></p>
               <button id="logout" class="logout">ログアウト</button>
           </div>
       </div>
       <div onclick="open_form();" id="task-input" class="task-input">
           メモを入力...
       </div>
       <div id="input-box" class="input-box">
           <textarea id="input-title" class="input-title" placeholder="タイトル" cols="20" rows="10" wrap="soft" maxlength=100></textarea>
           <textarea id="input-content" class="input-content" placeholder="メモを入力..." cols="20" rows="10" wrap="soft" maxlength=300></textarea>
           <div class="input-button" contenteditable="false">
               <button><i class="fas fa-palette"></i></button>
               <button><i class="far fa-image"></i></button>
               <button class="close-form">閉じる</button>
           </div>
       </div>
       <div id="tasks" class="tasks">
       </div>
     </div>
	<script type="text/javascript" src="./js/main_data.js" ></script>
    <script type="text/javascript" src="./js/main.js" ></script>
</body>
</html>