function showTime() {
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let year = time.getFullYear();
  let ampm = [];

  if (hour > 12 && hour < 24) {
    hour = hour - 12;
    ampm.push('pm')
  } else if (hour == 12) {
    ampm.push('pm')
  } else if (hour == 24) {
    hour = hour - 24;
    ampm.push('am');
  } else {
    ampm.push('am')
  }



  console.log(`${hour}:${min}:${sec}${ampm} ${date}-${month}-${year}`);
}


showTime()
