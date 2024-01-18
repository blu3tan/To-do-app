import './main.css';
import { renderTodo } from './todo-render';
import { todoFormCreation } from './todo-form-creation';

let todoList = [
    // {
    //     'title' : 'morning stretch',
    //     'description' : 'at least 15 min deep stretch routine',
    //     'date' : 'date',
    //     'priority' : 'high',
    //     'tag' : 'all'
    // },
];

export function renderTodoList() {

    todoList.forEach(item => {
        let index = todoList.indexOf(item);
        renderTodo(item, index);
    });
}

(function() {
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        todoFormCreation();
    });
    renderTodoList();
})();



export {todoList}