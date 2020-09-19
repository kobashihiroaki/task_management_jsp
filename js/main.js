let task_input = document.getElementById("task-input");
let input_box = document.getElementById("input-box");
let task_edit = document.getElementById("task-edit");
let gray = document.getElementById("gray");
let form_flag = "";

document.addEventListener('DOMContentLoaded', remove_event);

function remove_event() {
  document.removeEventListener("click", form_close);
}

//function add_event() {
//  document.addEventListener("click", form_close);
//}

//タスク入力画面を押したとき
function open_form() {
	event.stopPropagation();
    task_input.style.display = 'none';
    input_box.style.display = 'block';
    form_flag = "input";
    document.addEventListener("click", form_close);
}

//入力フォームを閉じる
function close_form() {
	event.stopPropagation();
	task_input.style.display = 'flex';
    input_box.style.display = 'none';
    form_flag = "";
    remove_event();
    task_insert();
    location.href = "./main.jsp";
}

//タスクを閉じる
function close_task() {
	event.stopPropagation();
	gray.style.display = 'none';
    form_flag = "";
    remove_event();
    update_task();
    location.href = "./main.jsp";
}

function form_close(e) {
      if (form_flag === "input") {
      	  //入力フォームの外側をクリックしたときの処理
          if(!e.target.closest('.input-box')) {

              task_input.style.display = 'flex';
              input_box.style.display = 'none';
              form_flag = "";
              remove_event();
              task_insert();
              location.href = "./main.jsp";
          //内側をクリックしたときの処理
          } else {
              task_input.style.display = 'none';
              input_box.style.display = 'block';
          }
      } else if (form_flag === "edit") {
          //外側をクリックしたときの処理
	      if(!e.target.closest('.task-edit')) {
	          gray.style.display = 'none';
	          form_flag = "";
	          remove_event();
	          update_task();
	        location.href = "./main.jsp";
          //内側をクリックしたときの処理
          } else {
              gray.style.display = 'flex';
	      }
      }
}