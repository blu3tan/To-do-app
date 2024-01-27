import { status } from "./form-status";

export function guideForm() {
    const todoContainer = document.querySelector('.todos');
    const addForm = guideMarkup();

    if (status.formStatus == 'closed') {
        todoContainer.appendChild(addForm);
        
        setTimeout(() => {
            addForm.classList.add('open');
            status.changeStatus('open');
        }, 50);
    }
    else {
        closeGuide()
    }
}

function guideMarkup() {
    const markup = `<div class="guide-header"></div>
    <div class="guide-demo"></div>
    <div class="guide-reset"></div>`

    const form = document.createElement('div');
    form.classList.add('form-guide');
    form.innerHTML = markup;
    return form;
}

function closeGuide() {
    const formOpen = document.querySelector('.form-guide');
    formOpen.classList.add('closed');
    status.changeStatus('closed');
    setTimeout(() => {
        formOpen.remove();
    }, 250);
}