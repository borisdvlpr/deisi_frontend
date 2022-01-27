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
    var st = window.getComputedStyle(menuButton, null);
    var tm = st.getPropertyValue('transform') || "none";

    menuButton.addEventListener('click', function() {
        if (tm != 'none') {
            if(angle > 0) {
                angle = angle - 180;
                menuButton.style.transform = 'rotate('+angle+'deg)';
                menuDrawer.style.transform = 'translateX(0%)';

            } else { 
                angle = angle + 180;
                menuButton.style.transform = 'rotate('+angle+'deg)';
                menuDrawer.style.transform = 'translateX(-120%)';
            };
        }
    }); 
}

toggleMenu();

for(let button = 0; button < humanButtons.lenght; i++) {
    humanButtons[button].addEventListener('click', detailsManager());
}

