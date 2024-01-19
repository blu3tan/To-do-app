import { todoRemove } from "./index";
import { renderTodoList } from "./index";
import { clearList } from "./clear-list";

export function renderTodo(item, index) {

    const todoContainer = document.querySelector('.todos');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
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
    dateText.textContent = item.dueDate;
    const deleteBox = document.createElement('div');
    deleteBox.classList.add('delete');
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.textContent = '+';

    deleteBox.addEventListener('click', () => {
        const index = todoItem.dataset;
        todoRemove(index);
        todoItem.setAttribute('hide', '');
        setTimeout(() => {
            todoItem.remove();
        }, 450)
        setTimeout(() => {
            clearList(todoContainer);
            renderTodoList();
        }, 500)
    })

    const editButton = document.createElement('div');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'EDIT';

    editButton.addEventListener('click', () => {
        todoItem.setAttribute('hide', '');
    })

    flag.append(flagIcon);
    title.append(flag, titleText);
    deleteBox.append(deleteIcon);
    date.append(dateText, deleteBox);
    todoItem.append(title, editButton, date);
    todoContainer.appendChild(todoItem);
}