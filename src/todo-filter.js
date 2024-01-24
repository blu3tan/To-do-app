import { todoList } from "./index";
import { clearList } from "./clear-list";
import { renderTodoList } from "./index";

export function filterListByTag(tag) {
    const todoContainer = document.querySelector('.todos');
    // array.filter() method was generating an array with the correct items
    // but with total different indexes. Instead with this forEach() function
    // i get an array with empty slots keeping the original indexes
    let filtered = [];
    todoList.forEach((item) => {
        if (item.tag == tag) filtered[todoList.indexOf(item)] = item;
    })
    clearList(todoContainer);
    if(tag == 'all') {
        renderTodoList(todoList);
        return;
    }
    else {
        renderTodoList(filtered);
        filtered = []
    }
}