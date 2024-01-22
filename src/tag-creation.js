import { clearList } from "./clear-list";

export const tagList = ['generic'];

let tagColors = {
    'generic': 'hsl(44, 84%, 60%)',
    'sport': 'hsl(180, 70%, 42%)',
    'work': 'hsl(262, 41%, 40%)',
    'relax': 'hsl(203, 83%, 33%)',
    'family': 'hsl(11, 77%, 57%)',
}

export {tagColors}

export function renderTagList() {
    tagList.forEach(item => {
        tagRender(item)
    });
}

export function refreshTags() {
    const tagContainer = document.querySelector('.tags');
    clearList(tagContainer);
    renderTagList();
};

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
