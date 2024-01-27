import { todoRemove} from "./index";
import { clearList } from "./clear-list";
import { todoEditForm } from "./todo-edit-form";
import { tagColors, tagRemove, refreshTags, activeTag } from "./tag-creation";
import { format } from "date-fns";
import { filterListByTag } from "./todo-filter";
import { storeTodo } from "./local-storage";


export function renderTodo(item, index) {

    const dateFormatted = format(item.dueDate, `MMM d`);
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
    dateText.textContent = dateFormatted;
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

    const done = item.done;
    if (done == true) {
        stroke.classList.toggle('visible');
        editButton.classList.toggle('hide');
        flagIcon.classList.toggle('checked');
    }

    const tagContainer = document.querySelector('.tags');
    todoItem.addEventListener('click', (e)=> {
        if (e.target.matches('.flag-icon')) {
            item.toggle();
            storeTodo();
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
                tagRemove();
            }, 350)
            setTimeout(() => {
                clearList(todoContainer);
                filterListByTag(activeTag);
            }, 400)
        }
        else if (e.target.matches('.edit-btn')) {
            todoEditForm(index);
            tagContainer.classList.toggle('block');
        }
    })
}