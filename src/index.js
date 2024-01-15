import './main.css';
import { todoObject } from './todo-creation';
import { renderTodoList } from './render-todo';

export let todoList = [
    {
        'title' : 'morning stretch',
        'description' : 'at least 15 min deep stretch routine',
        'date' : 'date',
        'priority' : 'high',
        'tag' : 'all'
    },
];



let formStatus = 'closed';

(function() {
    const header = document.querySelector('.header');
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        const form = document.createElement('div');
        form.classList.add('form-todo');

        if (formStatus == 'closed') {
            header.appendChild(form);
            setTimeout(() => {
                form.classList.add('open');
                formStatus = 'open';
            }, 100);
        }
        else {
            const formOpen = document.querySelector('.form-todo');
            formOpen.classList.add('closed');
            formStatus = 'closed';
            setTimeout(() => {
                formOpen.remove();
            }, 200);
        }
    })
    renderTodoList();
})();