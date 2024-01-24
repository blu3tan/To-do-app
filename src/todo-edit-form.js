import {todoList} from "./index";
import { formStructure } from "./todo-form-creation";
import { closeForm } from './todo-form-close'
import { status } from './form-status';
import { todoEdit } from "./todo-edit";
import { renderTodo } from "./todo-render";
import { tagColors, tagRemove, refreshTags } from "./tag-creation";
import { randomHsl } from "./random-color";
import { tagItemLogic } from "./todo-creation";


let indexOut;
let previousTag;

export function todoEditForm(index) {
    indexOut = index;
    const todoObject = todoList[index];
    const bgColor = tagColors[todoObject.tag];
    const todoDomItem = document.querySelector(`.todo-item[data-index = '${index}' ]`);
    const tagContainer = document.querySelector('.tags');
    const todoContainer = document.querySelector('.todos');
    const addBtn = document.querySelector('.add-btn');
    addBtn.classList.toggle('prevent');
    const editForm = formStructure();
    // Changes the edit-form color accordingly with the todo item
    editForm.style.setProperty('background-color', bgColor);

    if (status.formStatus == 'closed') {
        todoContainer.appendChild(editForm);
        fillFormFromArray();

        const setBtn = document.querySelector('.set-btn-txt');
        setBtn.textContent = 'SAVE';
        const formSubmit = document.getElementById('form-submit');
        formSubmit.addEventListener('submit', () => {
            checkTagEdited();
            tagItemLogic();
            todoEdit(index);
            todoDomItem.remove();
            renderTodo(todoObject, index);
            tagRemove();
            refreshTags();
            closeForm();
            tagContainer.classList.toggle('block');
            addBtn.classList.toggle('prevent');
        })
        setTimeout(() => {
            editForm.classList.add('open');
            status.changeStatus('open');
        }, 100);
        event.preventDefault();
    }
    else {
        closeForm()
    }
}

function fillFormFromArray() {
    const object = todoList[indexOut];
    const title = document.getElementById('title');
    const dueDate = document.getElementById('date');
    const priority = document.getElementById('priority');
    const description = document.getElementById('description');
    const tags = document.getElementById('tags');

    title.value = object.title;
    dueDate.value = object.dueDate;
    priority.value = object.priority;
    description.value = object.description;
    tags.value = object.tag;
    previousTag = tags.value;
}

// On changing tag prevent the lack of a bg color
function checkTagEdited() {
    const tags = document.getElementById('tags');
    if (tags.value !== previousTag) {
        if (tags.value == '') {
            tags.value = 'all';
        }
        if (tags.value in tagColors) return;
        else tagColors[tags.value] = randomHsl();
    }
}