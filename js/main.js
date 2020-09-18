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
    task_input.style.display = 'none';
    input_box.style.display = 'block';
    form_flag = "input";
    document.addEventListener("click", form_close);
}


// タスクを押したとき
function edit_task(value) {
    if(form_flag === "input") {
      return;
    }
    gray.style.display = 'flex';
    form_flag = "edit";

    let task_data = JSON.parse(sessionStorage.getItem('task_data'));
    //タスクを表示
    let task = task_data[value];
    console.log(task);

    let task_title = document.getElementById("task-title");
    let task_content = document.getElementById("task-content");

    task_title.value = task["title"];
    task_content.value = task["content"];

    document.addEventListener("click", form_close);
}

function form_close(e) {
      if (form_flag === "input") {
          if(!e.target.closest('.input-box')) {
              //入力フォームの外側をクリックしたときの処理
              if(!e.target.closest('.task-input')) {
                  task_input.style.display = 'flex';
                  input_box.style.display = 'none';
                  form_flag = "";
                  remove_event();
                  task_insert();
              } else {
                  task_input.style.display = 'none';
                  input_box.style.display = 'block';
              }
          } else {
              //内側をクリックしたときの処理
              //閉じるボタン以外をクリック
              if (!e.target.closest('.close-form')) {
                  task_input.style.display = 'none';
                  input_box.style.display = 'block';
              //閉じるボタンをクリック
              } else {
                  task_input.style.display = 'flex';
                  input_box.style.display = 'none';
                  form_flag = "";
                  remove_event();
                  task_insert()
              }
          }
      } else if (form_flag === "edit") {
//	      console.log("ok");
		  if(!e.target.closest('.task-edit')) {
		  //外側をクリックしたときの処理
		    if(!e.target.closest('.task')) {
		        gray.style.display = 'none';
		        form_flag = "";
		        remove_event();
		     } else {
		         gray.style.display = 'flex';
		     }
	        } else {
	        //内側をクリックしたときの処理
	            if(!e.target.closest('#close-task')) {
	                gray.style.display = 'flex';
	              //閉じるボタンをクリック
	              } else {
	                gray.style.display = 'none';
	                form_flag = "";
	                remove_event();
	            }
	        }
      }
}