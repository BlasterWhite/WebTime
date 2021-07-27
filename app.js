console.log("App.js is loaded");
var hour = 12;
var minute = 30;
var seconde = 30;

function setDisplay() {
    Time();
    document.getElementById('time').innerHTML = `${hour}h${minute}min${seconde}sec`;
}

function Time() {
    time = new Date()
    hour = time.getHours();
    minute = time.getMinutes();
    seconde = time.getSeconds();
}

setInterval(setDisplay,1000);
