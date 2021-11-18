window.addEventListener('load', main);


/** The start of the program, runs after the page is loaded */
function main(){
    startClock();
}

/** Keeps the time updated on the page */
function startClock() {
    renderClock()
    setInterval(renderClock, 1000);

}

/** Updates the page with current time */

function renderClock() {
    const h2 = document.getElementById('time');
    const date = new Date ();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours <10) {
        hours = "0" + hours;
    }
    if (minutes <10) {
        minutes = "0" + minutes;
    }
    if (seconds <10) {
        seconds = "0" + seconds;
    }

    h2.innerHTML = hours + ":" + minutes + ":" + seconds;

}