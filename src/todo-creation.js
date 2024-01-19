import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tags-colors";
import { randomHsl } from "./random-color";

export function todoCreation() {
    // extract input from the form element
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value;
    
    checkTag();
    tagColorLogic()

    let todoItem = new todoObject(title, description, dueDate, priority, tags)
    todoList.push(todoItem);
    console.log(todoItem);
    console.log(tagColors);
    const index = todoList.indexOf(todoItem);
    renderTodo(todoItem, index, color);
    todoItem = {};
}

let color;

function tagColorLogic() {
     if (tags.value in tagColors) {
        color = tagColors[tags.value];
    }
    else {
        tagColors[tags.value] = randomHsl();
        color = tagColors[tags.value];
    }

}

function checkTag() {
    if (tags.value == '') {
        tags.value = 'all';
    }
}