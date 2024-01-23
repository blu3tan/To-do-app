import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tag-creation";
import { randomHsl } from "./random-color";
import { tagList, refreshTags } from "./tag-creation";

export function todoCreation() {
    // extract input from the form element
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value;
    
    // checkTag();
    tagColorLogic();
    tagItemLogic();

    let todoItem = new todoObject(title, description, dueDate, priority, tags)
    todoList.push(todoItem);
    const index = todoList.indexOf(todoItem);
    
    renderTodo(todoItem, index);
    todoItem = {};
    refreshTags();
}

//helper module functions 

function tagColorLogic() {
    if (tags.value == '') {
        tags.value = 'all';
    }
    if (tags.value in tagColors) return;
    else tagColors[tags.value] = randomHsl();
}
function tagItemLogic() {
    if (tagList.includes(tags.value)) return;
    else tagList.push(tags.value);
}