export function eventClickThemeColor (themeName, body, classThemePrimary, classthemeSecondary1, classthemeSecondary2, keyColorPrimary, keyColorSec1, keyColorSec2) {
    themeName.addEventListener("click", function(){
        body.classList.add(classThemePrimary);
        body.classList.remove(classthemeSecondary1);
        body.classList.remove(classthemeSecondary2);

        const isThemePrimary = isActive(body, classThemePrimary);
        moveToLocalStorage(keyColorPrimary, isThemePrimary);

        const isThemeSecondary1 = isActive(body, classthemeSecondary1);
        moveToLocalStorage(keyColorSec1, isThemeSecondary1);

        const isThemeSecondary2 = isActive(body, classthemeSecondary2);
        moveToLocalStorage(keyColorSec2, isThemeSecondary2);

    })
}

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
