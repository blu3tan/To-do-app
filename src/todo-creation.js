import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";

export function todoCreation() {
    // extract input from the form element
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value;

    let todoItem = new todoObject(title, description, dueDate, priority, tags)
    todoList.push(todoItem);
    const index = todoList.indexOf(todoItem);
    renderTodo(todoItem, index);
    todoItem = {};
}