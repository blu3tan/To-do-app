import { todoList } from "./index";
import { clearList } from "./clear-list";
import { renderTodoList } from "./index";

export function filterListByTag(tag) {
    const todoContainer = document.querySelector('.todos');
    let filteredList = todoList.filter((item) => item.tag == tag);
    clearList(todoContainer);
    if(tag == 'all') {
        renderTodoList(todoList);
        return;
    }
    else {
        renderTodoList(filteredList);
    }
}