import { todoRemove } from "./todo-creation";
import { renderTodoList } from "./index";
import { todoList } from "./index";

function clearList(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

export function renderTodo(item, index) {

    const todoContainer = document.querySelector('.todos');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item', 'show');
    todoItem.setAttribute('data-index', index);

    const title = document.createElement('div');
    title.classList.add('title');
    const flag = document.createElement('div');
    flag.classList.add('flag');
    const flagIcon = document.createElement('div');
    flagIcon.classList.add('flag-icon');
    const titleText = document.createElement('span');
    titleText.textContent = item.title;
    const date = document.createElement('div');
    date.classList.add('date');
    const dateText = document.createElement('span');
    dateText.textContent = item.date;
    const deleteBox = document.createElement('div');
    deleteBox.classList.add('delete');
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.textContent = '+';

    deleteBox.addEventListener('click', () => {
        const index = todoItem.dataset;
        todoRemove(index);
        todoItem.remove();
        clearList(todoContainer);
        renderTodoList();

    })

    const editButton = document.createElement('div');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'EDIT';

    flag.append(flagIcon);
    title.append(flag, titleText);
    deleteBox.append(deleteIcon);
    date.append(dateText, deleteBox);
    todoItem.append(title, editButton, date);
    todoContainer.appendChild(todoItem);



}

// function randomHsl() {
//     return 'hsl(' + (Math.floor(Math.random() * 360)) + ', 70%, 42%)';
// };