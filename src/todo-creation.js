import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";

export function todoCreation() {
    // extract input from the form element
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value;

    let todoItem = new todoObject(title, description, date, priority, tags)
    todoList.push(todoItem);
    const index = todoList.indexOf(todoItem);
    renderTodo(todoItem, index);
    todoItem = {};
}

export function todoRemove(index) {
    todoList.splice((index.index), 1);
    console.log(todoList);
}