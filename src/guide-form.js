import { status } from "./form-status";
import { tagRemove, refreshTags, activeTagDisplay } from "./tag-creation";
import { renderTodoList, todoList, resetTodoList } from "./index";
import { resetTags } from "./tag-creation";
import { clearTodos } from "./clear-list";

// Generates the guide panel with the demo and reset buttons
export function guideForm() {
    const todoContainer = document.querySelector('.todos');
    const addBtn = document.querySelector('.add-btn');
    const tagContainer = document.querySelector('.tags');
    const addForm = guideMarkup();

    addForm.addEventListener('click', (e) => {
        if (e.target.matches('.reset-btn')) {
            localStorage.clear();
            resetTodoList();
            clearTodos();
            resetTags();
            tagRemove();
            refreshTags();
            activeTagDisplay('all');
            renderTodoList(todoList);
            setTimeout(() => {
                closeGuide();
                tagContainer.classList.toggle('block');
                addBtn.classList.toggle('prevent');
            }, 100)
        }
        else return;
    })

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
    const markup = `<div class="guide-header">
    <span class="guide-text">"MINI" TODO APP</span></div>
    <div class="list-container">
    <h3>MAIN FEATURES</h3><ul class="features-list">
    <li>Filter by tag</li><li>Dynamic tag management</li>
    <li>Dynamic tag colors</li><li>Dynamic todo colors</li>
    <li>Local storage</li><li>Responsive layout</li></ul></div></div>
    <div class="button-container"><div class="guide-demo"><div class="demo-btn">DEMO CONTENT</div></div><div class="guide-reset"><div class="reset-btn">RESET STORAGE</div></div></div>
    <div class="credits">Copyright ©&nbsp;<a class="blu3" href="https://github.com/blu3tan">Blu3</a></div>`

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