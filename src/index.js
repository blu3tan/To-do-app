import './main.css';
import { todoObject } from './todo-creation';
import { renderTodo } from './render-todo';

const todoList = [
    {
        'title' : 'morning stretch',
        'description' : 'at least 15 min deep stretch routine',
        'date' : 'date',
        'priority' : 'high',
        'tag' : 'all'
    },
];

(function() {

    // function with sample param to test adding new todos

    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        const prova = '';
        const desc = '';
        const data = '';
        const pri = '';
        const tagga = '';

        const todo1 = new todoObject(prova, desc, data, pri, tagga);
        renderTodo(todo1);
    })
})();