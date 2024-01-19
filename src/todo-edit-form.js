import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tags-colors";
import { randomHsl } from "./random-color";
import { formStructure } from "./todo-form-creation";
import { closeForm } from './todo-form-close'
import { status } from './form-status';

let indexOut;

export function todoEditForm(index) {
    indexOut = index;
    const todoContainer = document.querySelector('.todos');
    const addBtn = document.querySelector('.add-btn');
    addBtn.classList.toggle('prevent');
    const editForm = formStructure();


    if (status.formStatus == 'closed') {
        todoContainer.appendChild(editForm);
        fillFormFromArray();

        const setBtn = document.querySelector('.set-btn-txt');
        setBtn.textContent = `EDIT  TODO`;
        const formSubmit = document.getElementById('form-submit');
        formSubmit.addEventListener('submit', () => {
            closeForm();
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
}