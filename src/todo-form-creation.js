import { todoCreation } from './todo-creation';
import { closeForm } from './todo-form-close'
import { status } from './form-status';

const plus = document.querySelector('.plus');
const todoContainer = document.querySelector('.todos');


export function todoFormCreation() {
    const tagContainer = document.querySelector('.tags');
    const addForm = formStructure();
    if (status.formStatus == 'closed') {
        todoContainer.appendChild(addForm);
        const formSubmit = document.getElementById('form-submit');
        formSubmit.addEventListener('submit', () => {
            todoCreation();
            closeForm();
            tagContainer.classList.toggle('block');
        })
        setTimeout(() => {
            plus.classList.add('open');
            addForm.classList.add('open');
            status.changeStatus('open');
        }, 100);
        event.preventDefault();
    }
    else {
        closeForm()
    }
}

export function formStructure() {
        // used the innerHtml way to generate the form just to simplify the dom manipulation
    // this is due to the way i have designed the form element 
    const formMarkup =  `<form action="#" method="dialog" class="form-fields" id="form-submit">
    <div class="form-row"><label for="title">What?</label><input id="title" name="title" type="text" maxlength="20" placeholder="Title" required autofocus></div>
    <div class="form-row"><label for="due-date">When?</label><input type="date" id="date" name="due-date"/></div>
    <div class="form-row"><label for="priority">Priority</label><select id="priority" name="priority"><option value="low">Low</option><option value="med">Med</option><option value="high">High</option></select></div>
    <div class="form-row area"><label for="description">How?</label>
    <textarea id="description" name="description" maxlength="200"></textarea></div>
    <div class="form-row"><label for="tags">Tag</label><input id="tags" name="tags" type="text" maxlength="10" placeholder="All" value="all"></div><div class="form-row"><label for="todoBtn" class="todoLabel">_</label><button id="set-todo" type="submit" class="set-btn" name="todoBtn">
    <span class="set-btn-txt">SET&nbsp;&nbsp;TODO</span></button></div></form>`

    const form = document.createElement('div');
    form.classList.add('form-todo');
    form.innerHTML = formMarkup;

    return form;
}