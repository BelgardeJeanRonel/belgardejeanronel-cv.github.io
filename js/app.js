const iconOpenMenu = document.querySelector(".icon__open");
const backgroundModal = document.querySelector(".bg-modal");
const iconCloseMenu = document.querySelector(".icon__close");
const menu = document.querySelector(".header__menu__nav")

iconOpenMenu.addEventListener("click", function() {

    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");


    iconOpenMenu.animate([
            {transform: 'scale(0)'},
            {transform: 'scale(1.5)'}
        ], {
            duration: 600
        }
    )  
})

iconCloseMenu.addEventListener("click", function() {

    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");

    iconCloseMenu.animate([
            {transform: 'scale(0)'},
            {transform: 'scale(1.5)'}
        ], {
            duration: 600
        }
    )

    menu.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})

backgroundModal.addEventListener("click", function(){
    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");

    menu.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})

const linkNavMenu = document.querySelectorAll(".header__menu__nav a");

linkNavMenu.forEach(a => {
    a.addEventListener("click", function(){
      
        backgroundModal.classList.remove("show-modal");

        menu.classList.remove("show-modal");

        menu.animate([
            { transform: 'translate(0)'},
            { transform: 'translate(200%)'},
          ], {
            duration: 300,
        })
    })
})