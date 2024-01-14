
export function renderTodo(item) {

    // test function to create new color for each tag
    function randomHsl() {
        return 'hsl(' + (Math.floor(Math.random() * 360)) + ', 70%, 42%)';
    };

    const todoSection = document.querySelector('.todos')
    const todo = document.createElement('div');
    todo.classList.add('todo-item');

    todoSection.appendChild(todo);
}