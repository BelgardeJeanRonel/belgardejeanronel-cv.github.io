export function isActive(element, classe) {
    const response = element.classList.contains(classe);

    return response;
}

export function moveToLocalStorage(keyLocalStarage, value) {
    localStorage.setItem(keyLocalStarage, JSON.stringify(value));
}

export function getItemInLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
