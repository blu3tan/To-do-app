import { todoRemove } from "./index";
import { renderTodoList } from "./index";
import { clearList } from "./clear-list";
import { todoEditForm } from "./todo-edit-form";
import { todoEdit } from "./todo-edit";
import { tagColors } from "./tags-colors";


export function renderTodo(item, index) {
    const bgColor = tagColors[item.tag];
    const todoContainer = document.querySelector('.todos');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-index', index);
    todoItem.style.setProperty('background-color', bgColor);

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
    const stroke = document.createElement('div');
    stroke.classList.add('stroke');

    const editButton = document.createElement('div');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'EDIT';

    flag.append(flagIcon);
    title.append(flag, titleText);
    deleteBox.append(deleteIcon);
    date.append(dateText, deleteBox);
    todoItem.append(title, editButton, date, stroke);
    todoContainer.appendChild(todoItem);

    todoItem.addEventListener('click', (e)=> {
        console.log(e.target);
        if (e.target.matches('.flag-icon')) {
            stroke.classList.toggle('visible');
            editButton.classList.toggle('hide');
            flagIcon.classList.toggle('checked');
        }
        else if (e.target.matches('.delete')) {
            const index = todoItem.dataset;
            todoRemove(index);
            todoItem.setAttribute('hide', '');
            setTimeout(() => {
                todoItem.remove();
            }, 350)
            setTimeout(() => {
                clearList(todoContainer);
                renderTodoList();
            }, 400)
        }
        else if (e.target.matches('.edit-btn')) {
            todoEditForm(index);
            todoEdit(index);
        }
    })
}