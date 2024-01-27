
export function clearList(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};


export function clearTodos() {
    let todos = document.querySelectorAll('.todo-item');
    todos.forEach((todo) => {
    todo.remove();
})
}

