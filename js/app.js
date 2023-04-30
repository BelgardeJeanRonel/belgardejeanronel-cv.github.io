import { eventClickThemeColor, getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";
import { menu } from "./menu.js";
import { scrollingAnimation } from "./scrollingAppearance.js";
import { slideShow } from "./slide.js";
import { theme } from "./theme.js";


document.addEventListener("DOMContentLoaded", menu.init);

document.addEventListener("DOMContentLoaded", scrollingAnimation.init);

document.addEventListener("DOMContentLoaded", theme.iniit);

document.addEventListener("DOMContentLoaded", slideShow.init);



