

export function $(selector: string): HTMLElement {
    const element = document.querySelector(selector) as HTMLElement;
    if (element === null) {
        throw new Error(`Element with selector ${selector} not found`);
    }
    return element;
}