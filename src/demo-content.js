import { todoList } from "./index";
import { todoObject } from "./todo-class";
import { storeTodo, storeTags } from "./local-storage";
import { renderTodo } from "./todo-render";
import { refreshTags, tagList } from "./tag-creation";
import { format } from "date-fns";


export function demoContent() {
    const demoTodo = [
        {
            'title' : 'Call Andy',
            'description' : 'need to call Andy for arrangements',
            'dueDate' : '',
            'priority' : 'med',
            'tag' : 'all',
            'done' : false
        },
        {
            'title' : 'Pay bills',
            'description' : '',
            'dueDate' : '',
            'priority' : 'med',
            'tag' : 'all',
            'done' : false
        },
        {
            'title' : 'Renew gym',
            'description' : 'membership last till feb 4',
            'dueDate' : '',
            'priority' : 'med',
            'tag' : 'sport',
            'done' : false
        },
        {
            'title' : 'Pick up package',
            'description' : 'pick up package for Lance',
            'dueDate' : '',
            'priority' : 'high',
            'tag' : 'family',
            'done' : false
        },
        {
            'title' : 'Swim session',
            'description' : 'pool reserved for mar 11',
            'dueDate' : '',
            'priority' : 'low',
            'tag' : 'sport',
            'done' : false
        },
        {
            'title' : 'Movie tickets',
            'description' : 'reserve tickets for 2',
            'dueDate' : '',
            'priority' : 'med',
            'tag' : 'relax',
            'done' : false
        },
    ];

    tagList.push('sport', 'family', 'relax');
    storeTags();

    demoTodo.forEach((item) => {
        let todoItem = new todoObject(item.title, item.description, item.dueDate, item.priority, item.tag)
        todoItem.dueDate = format(new Date, `yyyy-MM-dd`);
        todoList.push(todoItem);
        storeTodo();
        const index = todoList.indexOf(todoItem);
        renderTodo(todoItem, index);
        todoItem = {};
        refreshTags();
    });
}