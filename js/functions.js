export function eventClickThemeColor (themeName, body, classThemePrimary, classthemeSecondary1, classthemeSecondary2) {
    themeName.addEventListener("click", function(){
        body.classList.add(classThemePrimary);
        body.classList.remove(classthemeSecondary1);
        body.classList.remove(classthemeSecondary2);

    })
}