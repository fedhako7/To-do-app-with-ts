const task_input: any = document.getElementById('task-input');
const add_button = document.getElementById('add-button');

function task_adder(): void{
    let task_name: any = task_input?.value;

    console.log(task_name);

    if (task_name === ''){
        alert('Enter task name!');

    }

    else{
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
            const target = delete_button?.parentElement?.parentElement?.parentElement;

            target?.remove();

        });

        edit_button.addEventListener('click', function () {
            let target = this?.parentElement?.previousSibling;
            let newName: string | null = prompt('New task name:', target?.textContent as string | undefined);

            if (newName !== '' && target !== null && target !== undefined){
                target.textContent = newName;
            }
        });

        
        buttons_con.appendChild(delete_button);
        buttons_con.appendChild(edit_button);
        list_cont.appendChild(para);
        list_cont.appendChild(buttons_con);
        list.appendChild(list_cont);
        lists?.appendChild(list);
    }
}

add_button?.addEventListener('click', () => {
    task_adder();

});

