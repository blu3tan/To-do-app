import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tags-colors";
import { randomHsl } from "./random-color";
import { formStructure } from "./todo-form-creation";
import { closeForm } from './todo-form-close'
import { status } from './form-status';

let bgColor;


export function todoEdit() {
    const todoContainer = document.querySelector('.todos');
    const addBtn = document.querySelector('.add-btn');
    addBtn.classList.toggle('prevent');
    const editForm = formStructure();

    if (status.formStatus == 'closed') {
        todoContainer.appendChild(editForm);
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