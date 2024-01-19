import { status } from "./form-status";

export function closeForm() {
    const plus = document.querySelector('.plus');
    const formOpen = document.querySelector('.form-todo');
    plus.classList.remove('open');
    formOpen.classList.add('closed');
    status.changeStatus('closed');
    setTimeout(() => {
        formOpen.remove();
    }, 200);
}