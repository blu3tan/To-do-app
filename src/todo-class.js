
export class todoObject {
    constructor(title, description, dueDate, priority, tag) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tag = tag;
        this.done = false;
    }
}

todoObject.prototype.toggle = function() {
    this.done = !this.done;
}