var i = 0;
let i2 = 0;
var txt = "\u205f-\u205fDepartamento\u205fInformática!"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */


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


setInterval(typeWriter, 3000);
setInterval(delTypeWriter, 8000);