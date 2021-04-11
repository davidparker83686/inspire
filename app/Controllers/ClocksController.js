


//Private

setInterval(time, 500);

function time() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let amORpm = 'AM'
  let timeOfDay = 'Afternoon'

  if (hour > 12) {
    amORpm = 'PM'
  }

  if (hour < 13) {
    timeOfDay = 'Morning'
  } else if (hour > 19) {
    timeOfDay = 'Evening'
  }


  if (hour > 12) {
    hour = hour - 12
  }
  if (hour == 0) {
    hour = 12
  }
  if (minute < 10) {
    minute = '0' + minute
  }



  document.getElementById('clock').innerHTML = `${hour}:${minute}`
  document.getElementById('amORpm').innerHTML = amORpm
  document.getElementById('timeOfDay').innerHTML = timeOfDay

  // document.getElementById("clock").innerHTML = hour + ':' + minute + '' + amORpm 

}

//Public
export default class ClocksController {
  constructor() {
    time()
  }
}
