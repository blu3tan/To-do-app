import './main.css';
import { renderTodo } from './todo-render';
import { todoFormCreation } from './todo-form-creation';
import { refreshTags, activeTagDisplay, activeTagSwitch } from './tag-creation';
import { filterListByTag } from './todo-filter';

let todoList = [];

export {todoList}

export function todoRemove(index) {
    todoList.splice((index.index), 1);
}

export function renderTodoList(array) {
    array.forEach(item => {
        let index = array.indexOf(item);
        renderTodo(item, index);
    });
}

(function() {
    // select the tag container and toggle a class to prevent click on tags while the form is open
    const tagContainer = document.querySelector('.tags');
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        todoFormCreation();
        tagContainer.classList.toggle('block');

    });

    const tags = document.querySelector('.tags');
    tags.addEventListener('click', (e) => {
        const tagPressed = e.target.id;
        if (tagPressed == '') return;
        activeTagSwitch(tagPressed);
        filterListByTag(tagPressed);
    })

    // const logo = document.querySelector('logo');
    // logo.addEventListener('click', () => {

    // })

    refreshTags();
    activeTagDisplay('all');
    renderTodoList(todoList);
})();
