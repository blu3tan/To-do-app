import './main.css';
import { todoObject } from './todo';
import { renderTodo } from './render-todo';

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