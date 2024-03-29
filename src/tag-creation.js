import { clearList } from "./clear-list";
import { todoList } from "./index";
import { storeTags, loadTagsFromStorage, loadColorsFromStorage } from "./local-storage";

// Shared variable to control the state of the selected tag
export let activeTag = 'all';

// tags and colors are pulled from storage if storage is not empty
export let tagList = loadTagsFromStorage();
export let tagColors = loadColorsFromStorage();

export function resetTags() {
    activeTag = 'all';
    tagList = loadTagsFromStorage();
    tagColors = loadColorsFromStorage();
}

// this 2 functions control the logic of tag appearance
// when user selects one tag the one selected before must appear not pressed
export function activeTagDisplay(tag) {
    const tagPressed = document.getElementById(tag);
    tagPressed.classList.add('pressed');
}
export function activeTagSwitch(tag) {
    const tagPressed = document.querySelector(`#${activeTag}`)
    tagPressed.classList.remove('pressed');
    activeTag = tag;
    const newTagPressed = document.querySelector(`#${tag}`);
    newTagPressed.classList.add('pressed');
}


export function renderTagList() {
    tagList.forEach(item => {
        tagRender(item)
    });
}

export function refreshTags() {
    const tagContainer = document.querySelector('.tags');
    clearList(tagContainer);
    renderTagList();
    activeTagDisplay(activeTag);
};

export function tagRemove() {
    tagList.forEach(tag => {
        if (tag == 'all') return;
        else {
        let tagPresence = todoList.find((obj) => obj.tag == tag)
        if (tagPresence == undefined) {
            let index = tagList.indexOf(tag);
            tagList.splice((index), 1);
            storeTags();
            const tagItem = document.querySelector(`#${tag}`);
            tagItem.setAttribute('hide', '');
            activeTag = 'all'
            }
        }
    })
    setTimeout(() => {
        refreshTags();
    }, 300)
}

function tagRender(item) {
    const bgColor = tagColors[item]
    const text = `#${item}`;
    const tagItem = document.createElement('div');
    tagItem.classList.add('tag-item');
    tagItem.setAttribute(`id`, `${item}`)
    tagItem.textContent = text.toUpperCase();
    tagItem.style.setProperty('background-color', bgColor);

    const tagContainer = document.querySelector('.tags');
    tagContainer.appendChild(tagItem);
}
