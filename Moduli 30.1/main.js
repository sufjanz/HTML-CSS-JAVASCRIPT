var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var miliseconds = currentTime.getMilliseconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" +minutes+":"+seconds+"-"+meridian;
    clock.innerHTML = clockTime;
}

var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);

