import { todoList } from "./index";

export function renderTodoList() {

        todoList.forEach(item => {
            renderTodo(item);
        });

}

function renderTodo(item) {

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

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

    flag.append(flagIcon);
    title.append(flag, titleText);
    deleteBox.append(deleteIcon);
    date.append(dateText, deleteBox);
    todoItem.append(title, date);
    const todoContainer = document.querySelector('.todos');
    todoContainer.appendChild(todoItem);



}

// function randomHsl() {
//     return 'hsl(' + (Math.floor(Math.random() * 360)) + ', 70%, 42%)';
// };