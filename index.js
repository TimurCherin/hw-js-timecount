const timer = document.querySelector(".timer")
const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const currentTime = prompt("Введіть час у секундах")
let timeDays =  Math.floor(currentTime / 60 / 60 / 24);
let timeDayRemainder = Math.floor(currentTime % (60 * 60 * 24))
let timeHours =  Math.floor(timeDayRemainder / 60 / 60);
let timeHoursRemainder = Math.floor(currentTime % (60 * 60))
let timeMinutes =  Math.floor(timeHoursRemainder / 60);
let timeMinutesRemainder = Math.floor(currentTime % (60))
let timeSeconds =  Math.floor(timeMinutesRemainder);
setInterval(changeSeconds, 1000)
setInterval(countSeconds, 1000)
function changeSeconds(){
    seconds.textContent = timeSeconds
}
function countSeconds (){
    if (timeSeconds >= 1) {
        timeSeconds --
    } 
    if (timeMinutes >= 1 && timeSeconds === 0){
        timeSeconds = 60
        timeMinutes = timeMinutes - 1
    }
}
setInterval(changeMinutes, 1000)
function changeMinutes(){
    minutes.textContent = timeMinutes
    if (timeHours >= 1 && timeMinutes === 0){
        timeMinutes = 60
        timeHours = timeHours - 1
    }
}
setInterval(changeHours, 1000)
function changeHours(){
    hours.textContent = timeHours
    if (timeDays >= 1 && timeHours === 0){
        timeHours = 24
        timeDays = timeDays - 1
    }
}
setInterval(changeDays, 1000)
function changeDays(){
    days.textContent = timeDays
}
