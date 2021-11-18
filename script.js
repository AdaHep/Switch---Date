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
    const date = new Date ();

    const timeElement = document.getElementById('time');
    timeElement.innerHTML = getCurrentTimeString (date);

    const weekdayElement = document.getElementById('weekday');
    weekdayElement.innerText = getWeekday (date);
}

/**
 * Takes a date and return current weekday in swedish. 
 * @param {Date} date 
 * @returns {String}
 */

function getWeekday (date) {
    const weekday = date.getDay();
    switch (weekday){
        case 0: return 'Söndag'
        case 1: return 'Måndag'
        case 2: return 'Tisdag'
        case 3: return 'Onsdag'
        case 4: return 'Torsdag'
        case 5: return 'Fredag'
        case 6: return 'Lördag'
    }


}


/**
 * Constructs the time string from a date, includes seconds
 * @param {Date} date 
 * @returns {String} in format hh:mm:ss
 */
function getCurrentTimeString (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours <10) {hours = "0" + hours;}
    if (minutes <10) {minutes = "0" + minutes;}
    if (seconds <10) {seconds = "0" + seconds;}

    return hours + ":" + minutes + ":" + seconds;
}