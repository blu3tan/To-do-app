import './main.css';
import { renderTodoList } from './render-todo';
import { todoFormCreation } from './todo-form-creation';

export let todoList = [
    {
        'title' : 'morning stretch',
        'description' : 'at least 15 min deep stretch routine',
        'date' : 'date',
        'priority' : 'high',
        'tag' : 'all'
    },
];

(function() {

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        todoFormCreation();
    });
    renderTodoList();
})();