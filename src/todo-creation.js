import { todoObject } from "./todo-class";
import {todoList} from "./index";
import { renderTodo } from "./todo-render";
import { tagColors } from "./tag-creation";
import { randomHsl } from "./random-color";
import { tagList, refreshTags } from "./tag-creation";
import { storeTodo, storeTags, storeColors } from "./local-storage";
import { format } from "date-fns"

export function todoCreation() {
    // extract input from the form element
    const title = document.getElementById('title').value;
    let dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const tags = document.getElementById('tags').value;
    
    if (dueDate == '') {
        let today = new Date();
        dueDate = format(today, 'yyyy-MM-dd');
    }
    // Helpers to avoid receiving a void tag value without forcing user to provide one
    tagColorLogic();
    tagItemLogic();

    let todoItem = new todoObject(title, description, dueDate, priority, tags)
    todoList.push(todoItem);
    storeTodo();
    const index = todoList.indexOf(todoItem);
    
    renderTodo(todoItem, index);
    todoItem = {};
    refreshTags();
}

function tagColorLogic() {
    if (tags.value == '') {
        tags.value = 'all';
    }
    if (tags.value in tagColors) return;
    else tagColors[tags.value] = randomHsl();
    storeColors();
}

export function tagItemLogic() {
    if (tagList.includes(tags.value)) return;
    else tagList.push(tags.value);
    storeTags();
}