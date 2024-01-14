
export class todoObject {
    constructor(title, description, dueDate, priority, tag) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tag = tag;
    }

    setName(value) {
        this.name = value;
    }

    setDescription(value) {
        this.description = value;
    }

    setDate(value) {
        this.dueDate = value;
    }

    setPriority(value) {
        this.priority = value;
    }
}