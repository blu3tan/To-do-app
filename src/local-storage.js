import { todoList } from "./index";
import { tagColors, tagList } from "./tag-creation";


export function storeTodo() {
    localStorage.setItem('todoListLocal', JSON.stringify(todoList));
    console.log(JSON.parse(localStorage.getItem('todoListLocal')));
}

export function storeTags() {
    localStorage.setItem('tagListLocal', JSON.stringify(tagList));
    console.log(JSON.parse(localStorage.getItem('tagListLocal')));
}

export function storeColors() {
    localStorage.setItem('tagColorsLocal', JSON.stringify(tagColors));
    console.log(JSON.parse(localStorage.getItem('tagColorsLocal')));
}