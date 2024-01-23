import './main.css';
import { renderTodo } from './todo-render';
import { todoFormCreation } from './todo-form-creation';
import { refreshTags, activeTagDisplay, activeTag, activeTagSwitch } from './tag-creation';

let todoList = [];

export {todoList}

export function todoRemove(index) {
    todoList.splice((index.index), 1);
}

export function renderTodoList() {
    todoList.forEach(item => {
        let index = todoList.indexOf(item);
        // let color = tagColors[item.tag];
        renderTodo(item, index);
    });
}

(function() {
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        todoFormCreation();

    });

    const tags = document.querySelector('.tags');
    tags.addEventListener('click', (e) => {
        const tagPressed = e.target.id;
        if (tagPressed == '') return;
        activeTagSwitch(tagPressed);
    })

    // const logo = document.querySelector('logo');
    // logo.addEventListener('click', () => {

    // })

    refreshTags();
    activeTagDisplay('generic');
    renderTodoList();
})();
