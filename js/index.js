function myClock() {
 let siteTime = new Date();
 let today = 16 - siteTime.getDate() ;
 let hour = 24 - siteTime.getHours() ;
 let minute =  60 - siteTime.getMinutes()  ;
 let second = 60 - siteTime.getSeconds();
 if (today < 10) today = "0" + today;
 if (hour < 10) hour = "0" + hour;
 if (minute < 10) minute = "0" + minute;
 if (second < 10) second = "0" + second;

 if(today <= 0  && hour <= 0 &&  minute  <= 0   &&  second == 30)
 {
 document.getElementById("siteTime").innerHTML = "Час вийшов";
 clearInterval(interval);

 }
 else{
 document.getElementById("day").innerHTML = today;
 document.getElementById("hour").innerHTML = hour;
 document.getElementById("minute").innerHTML = minute;
 document.getElementById("second").innerHTML = second;
 document.getElementById("siteTime").innerHTML = today + ":" + hour + ":" + minute + ":" + second;
}
  
 }

let interval = setInterval(myClock, 1000);