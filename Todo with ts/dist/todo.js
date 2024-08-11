"use strict";
const task_input = document.getElementById('task-input');
const add_button = document.getElementById('add-button');
function task_adder() {
    let task_name = task_input === null || task_input === void 0 ? void 0 : task_input.value;
    console.log(task_name);
    if (task_name === '') {
        alert('Enter task name!');
    }
    else {
        const lists = document.getElementById('lists');
        const list = document.createElement('li');
        const list_cont = document.createElement('div');
        const para = document.createElement('p');
        const buttons_con = document.createElement('div');
        const delete_button = document.createElement('button');
        const edit_button = document.createElement('button');
        para.textContent = task_name;
        delete_button.textContent = 'Delete';
        edit_button.textContent = 'Edit';
        delete_button.addEventListener('click', function () {
            var _a, _b;
            const target = (_b = (_a = delete_button === null || delete_button === void 0 ? void 0 : delete_button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
            target === null || target === void 0 ? void 0 : target.remove();
        });
        edit_button.addEventListener('click', function () {
            var _a;
            let target = (_a = this === null || this === void 0 ? void 0 : this.parentElement) === null || _a === void 0 ? void 0 : _a.previousSibling;
            let newName = prompt('New task name:', target === null || target === void 0 ? void 0 : target.textContent);
            if (newName !== '' && target !== null && target !== undefined) {
                target.textContent = newName;
            }
        });
        buttons_con.appendChild(delete_button);
        buttons_con.appendChild(edit_button);
        list_cont.appendChild(para);
        list_cont.appendChild(buttons_con);
        list.appendChild(list_cont);
        lists === null || lists === void 0 ? void 0 : lists.appendChild(list);
    }
}
add_button === null || add_button === void 0 ? void 0 : add_button.addEventListener('click', () => {
    task_adder();
});
