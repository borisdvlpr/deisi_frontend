let angle = 180; 
let humanButtons = document.querySelectorAll('.user-button');
let humanDetails = document.querySelectorAll('.info');

function detailsManager() {
    console.log("Click");
    // if(humanDetails.style.transform === 'translateX(-100%)') {
    //     humanDetails.style.transform === 'translateX(0%)';
    //     humanButtons.textContent = 'Return';

    // } else if(humanDetails.style.transform === 'translateX(0%)') {
    //     humanDetails.style.transform === 'translateX(-100%)'
    //     humanButtons.textContent = 'Mark Zuck';
    // }
}

function toggleMenu() {
    let menuButton = document.querySelector('.menu-button');
    let menuDrawer = document.querySelector('.menu-drawer');
    const burger = document.querySelector(".burger");

    menuButton.addEventListener("click", () => {
        if(menuDrawer.style.transform === 'translateX(0%)') {
            menuDrawer.style.transform = 'translateX(-120%)';

        } else {
            menuDrawer.style.transform = 'translateX(0%)';
        }
        
        burger.classList.toggle("toggle");
    }); 
}

toggleMenu();

for(let button = 0; button < humanButtons.lenght; i++) {
    humanButtons[button].addEventListener('click', detailsManager());
}

