var i = 0;
let i2 = 0;
var txt = "\u205f-\u205fDepartamento\u205fInformática"; /* The text */
var speed = 100;                                        /* The speed/duration of the effect in milliseconds */
var angle = 180;

function typeWriter() {
  if (i < txt.length) {
    document.title += txt.charAt(i);
    i++;
    document.title = document.title + "|";
    setTimeout(function() {
        document.title = document.title.slice(0, -1);
     }, speed);
    setTimeout(typeWriter, speed);
  }
}

function delTypeWriter() {
    if (i2 < txt.length) {
        setTimeout(function() {
            document.title = document.title.slice(0, -1);
        }, speed);
        i2++;
        setTimeout(delTypeWriter, speed);
    }
}

function toggleMenu() {
    let menuButton = document.querySelector('.menu-button');
    let menuDrawer = document.querySelector('.menu-drawer');
    var st = window.getComputedStyle(menuButton, null);
    var tm = st.getPropertyValue('transform') || "none";

    menuButton.addEventListener('click', function() {
        if (tm != 'none') {
            let values = tm.split('(')[1].split(')')[0].split(',');
            // angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));

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

function main() {
    toggleMenu();
    setInterval(typeWriter, 3000);
    setInterval(delTypeWriter, 8000);
}

main()
