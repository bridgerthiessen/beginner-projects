setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let year = time.getFullYear();
  let am_pm = [];

  if (hour > 12 && hour < 24) {
    hour = hour - 12;
    am_pm.push('pm')
  } else if (hour == 12) {
    am_pm.push('pm')
  } else if (hour == 24) {
    hour = hour - 24;
    am_pm.push('am');
  } else {
    ampm.push('am')
  }

  hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

  let fullTime = hour + ":" + min + ":" + sec + " " + am_pm + " " + date + "/" + month + "/" + year;

  document.getElementById("clock").innerHTML = fullTime;

}


showTime();
