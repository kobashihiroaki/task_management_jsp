/*
var tasks = [
    {
        id: 1,
        title: 'あああ',
        content: 'いいい'
    },
    {
        id: 2,
        title: 'ccc',
        content: 'ddd'
    },
    {
        id: 3,
        title: 'eee',
        content: 'fff'
    }
]
*/
document.addEventListener('DOMContentLoaded', function () {
    let userData = {};
    userData = {
        action: "select",
        user_id: 1
    }

    const requestUrl = "http://localhost:8080/task_management/main";
    fetch(requestUrl, {
        method: "POST",
//        mode: 'no-cors',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then (response => {
        console.log("ok");
        // console.log(response);
        return response.json();
    })
    .then (json => {
        console.log(json);
        let tasks = json;
        new Vue({
            el: '#app',
            data: {
                tasks: tasks
            }
        })
    })
    .catch(e => {
        alert("エラー");
    });
});
// Vue.component('task', {
//     template:
//     "<div v-for='task in tasks' v-bind:key='task.id' class='task'>" +
//         "<textarea class='task-title'>{{ task.title }}</textarea>" +
//         "<textarea class='task-content'>{{ task.content }}</textarea>" +
//     "</div>"
// });


/*
new Vue({
	el: '#app',
	data: {
	  tasks: tasks
	}
})
*/
