import { tagColors } from "./tags-colors";
import { clearList } from "./clear-list";

export const tagList = ['generic'];

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
