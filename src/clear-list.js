
export function clearList(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};