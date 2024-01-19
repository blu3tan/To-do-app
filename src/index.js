import './main.css';
import { renderTodo } from './todo-render';
import { todoFormCreation } from './todo-form-creation';

let todoList = [];

export {todoList}

export function todoRemove(index) {
    todoList.splice((index.index), 1);
    console.log(todoList);
}

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

    // const logo = document.querySelector('logo');
    // logo.addEventListener('click', () => {

    // })
    renderTodoList();
})();
