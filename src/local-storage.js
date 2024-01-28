import { todoList } from "./index";
import { tagColors, tagList } from "./tag-creation";


export function storeTodo() {
    localStorage.setItem('todoListLocal', JSON.stringify(todoList));
}
export function storeTags() {
    localStorage.setItem('tagListLocal', JSON.stringify(tagList));
}
export function storeColors() {
    localStorage.setItem('tagColorsLocal', JSON.stringify(tagColors));
}

export function loadTodoFromStorage() {
    if (!localStorage.getItem('todoListLocal')) return [];
    else {
        let list = [...JSON.parse(localStorage.getItem('todoListLocal'))];
        list.forEach((item) => {
            // the toggle method is inherited from the class object
            // it was added as method inside the class but local storage doesn't
            // allow functions parsing so is attached here to every todo
            // recovered from storage
            item.toggle = function() {
                this.done = !this.done;
            }
        })
        return list;
    }
}

export function loadTagsFromStorage() {
    if (!localStorage.getItem('tagListLocal')) return ['all'];
    else {
        const storedTags = JSON.parse(localStorage.getItem('tagListLocal'));
        return [...storedTags];
    }
}

export function loadColorsFromStorage() {
    if (!localStorage.getItem('tagColorsLocal')) return {
        'all': 'hsl(44, 84%, 50%)',
        'sport': 'hsl(180, 70%, 42%)',
        'work': 'hsl(262, 41%, 40%)',
        'relax': 'hsl(203, 83%, 33%)',
        'family': 'hsl(11, 77%, 57%)'
    };
    else {
        const colors = JSON.parse(localStorage.getItem('tagColorsLocal'));
        return colors;
    }
}

