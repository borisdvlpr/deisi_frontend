let angle = 180; 

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
