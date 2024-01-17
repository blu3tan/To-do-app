
let formStatus = 'closed';

const formMarkup =  `<form action="#" method="dialog" class="form-fields">
<div class="form-row"><label for="title">What?</label><input id="title" name="title" type="text" maxlength="20" placeholder="Title" required></div>
<div class="form-row"><label for="due-date">When?</label><input type="date" id="date" name="due-date" required/></div>
<div class="form-row"><label for="priority">Priority</label><select id="priority" name="priority"><option value="low">Low</option><option value="med">Med</option><option value="high">High</option></select></div>
<div class="form-row area"><label for="description">How?</label>
<textarea id="description" name="description" maxlength="200"></textarea></div>
<div class="form-row"><label for="tags">Tag</label><select id="tags" name="tags"><option value="all">All</option><option value="work">Work</option><option value="sport">Sport</option></select></div><div class="form-row"><label for="todoBtn" class="todoLabel">_</label><button id="set-todo" type="button" class="set-btn" name="todoBtn">
<span class="set-btn-txt">SET&nbsp;&nbsp;TODO</span></button></div></form>`

export function todoFormCreation() {
    
    const plus = document.querySelector('.plus');
    const todoContainer = document.querySelector('.todos');
    const form = document.createElement('div');
    form.classList.add('form-todo');
    form.innerHTML = formMarkup;

    if (formStatus == 'closed') {
        todoContainer.appendChild(form);
        setTimeout(() => {
            plus.classList.add('open');
            form.classList.add('open');
            formStatus = 'open';
        }, 100);
    }
    else {
        const formOpen = document.querySelector('.form-todo');
        plus.classList.remove('open');
        formOpen.classList.add('closed');
        formStatus = 'closed';
        setTimeout(() => {
            formOpen.remove();
        }, 200);
    }
}