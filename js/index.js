function myClock() {
 let siteTime = new Date();
 let today = 20 - siteTime.getDate();
 let hour = 24 - siteTime.getHours();
 let minute = 60 - siteTime.getMinutes();
 let second = 60 - siteTime.getSeconds();

 if (chack(today, hour, minute, second)) {
  document.getElementById("timerOff").innerHTML = "Реєстрація на курс завершена.";
  clearInterval(interval);
  document.getElementById('day').style.visibility = 'hidden';
  document.getElementById('hour').style.visibility = 'hidden';
  document.getElementById('minute').style.visibility = 'hidden';
  document.getElementById('second').style.visibility = 'hidden';
 }
 else {
  if (today < 10) today = "0" + today;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  document.getElementById("day").innerHTML = today + "<br>Day";
  document.getElementById("hour").innerHTML = hour + "<br>Hour";
  document.getElementById("minute").innerHTML = minute + "<br>Minute";
  document.getElementById("second").innerHTML = second + "<br>Second";
 }

}

function chack(day, hour, minute, second) {
 if (day <= 0 && hour <= 0 && minute <= 0 && second == 1)
  return true;
 else return false;
}

let interval = setInterval(myClock, 1000);
