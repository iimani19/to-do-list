document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById
    ('task-input');
    const addTaskBtn = document.getElementById
    ('add-task-btn');
    const taskList = document.getElementById
    ('task-list');
    const todosContainer = document.querySelector
    ('.todos-container');


    const addTask = (text, completed = false) => {
        const taskText = text || taskInput.value.trim();
        if(!taskText) {
            return;

        }

        const li = document.createElement('li');
        li.innerHTML = ` 
        <input type="checkbox" class= "checkbox" 
        ${completed ? 'checked' : '' }/>
        <span> ${taskText} </span>
        <div class="task-btns">
            <button class="delete-btn"><i class="fa fa-trash-o"></i> </btn>
        </div>
        `;

        const checkbox = li.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed', isChecked);
 
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        })

        taskList.appendChild(li);
        taskInput.value = '';
    

    }

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addTask();
    });
    
    
});