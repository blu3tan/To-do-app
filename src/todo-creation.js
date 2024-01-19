import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tags-colors";
import { randomHsl } from "./random-color";
let bgColor;

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
    const index = todoList.indexOf(todoItem);
    renderTodo(todoItem, index, bgColor);
    todoItem = {};
}

//helper module functions 

function tagColorLogic() {
     if (tags.value in tagColors) {
        bgColor = tagColors[tags.value];
    }
    else {
        tagColors[tags.value] = randomHsl();
        bgColor = tagColors[tags.value];
    }

}

function checkTag() {
    if (tags.value == '') {
        tags.value = 'all';
    }
}