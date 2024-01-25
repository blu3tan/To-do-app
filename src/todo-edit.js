import { todoList } from "./index";
import { storeTodo } from "./local-storage";

export function todoEdit(index) {
    const object = todoList[index];
    const title = document.getElementById('title');
    const dueDate = document.getElementById('date');
    const priority = document.getElementById('priority');
    const description = document.getElementById('description');
    const tags = document.getElementById('tags');
    
    object.title = title.value;
    object.dueDate = dueDate.value;
    object.priority = priority.value;
    object.description = description.value;
    object.tag = tags.value;
    storeTodo();
}