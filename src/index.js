import './main.css';
import { renderTodo } from './todo-render';
import { todoFormCreation } from './todo-form-creation';
import { refreshTags, activeTagDisplay, activeTagSwitch, tagRemove } from './tag-creation';
import { filterListByTag } from './todo-filter';
import { storeTodo, loadTodoFromStorage} from './local-storage';
import { guideForm } from './guide-form';

// the todo list is populated each time from the storage only if
// there is something stored
export let todoList = loadTodoFromStorage();

export function resetTodoList() {
    todoList = loadTodoFromStorage();
}

export function todoRemove(index) {
    todoList.splice((index.index), 1);
    storeTodo();
}

export function renderTodoList(array) {
    array.forEach(item => {
        let index = array.indexOf(item);
        renderTodo(item, index);
    });
}

const logo = document.querySelector('.logo');
const tagContainer = document.querySelector('.tags');
const addBtn = document.querySelector('.add-btn');

(function() {
    // select the tag container and toggle a class to prevent click on tags while the form is open
    // all to avoid creating ulterior logic

    addBtn.addEventListener('click', () => {
        todoFormCreation();
        tagContainer.classList.toggle('block');
        logo.classList.toggle('prevent');
    });

    tagContainer.addEventListener('click', (e) => {
        const tagPressed = e.target.id;
        if (tagPressed == '') return;
        activeTagSwitch(tagPressed);
        filterListByTag(tagPressed);
    })

    logo.addEventListener('click', () => {
        guideForm();
        tagContainer.classList.toggle('block');
        addBtn.classList.toggle('prevent');
    })

    // localStorage.clear();
    tagRemove();
    refreshTags();
    activeTagDisplay('all');
    renderTodoList(todoList);
})();
