import './main.css';
import { renderTodo } from './render-todo';
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

function renderTodoList() {

    todoList.forEach(item => {
        renderTodo(item);
    });

}

(function() {

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        todoFormCreation();
    });
    renderTodoList();
})();