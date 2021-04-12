export default class Weather {
  constructor(data) {
    this.temp = data.temp || data.main.temp
    this.icon = data.icon || data.weather.icon
    this.name = data.name

  }
  get Template() {
    return `
    <div><b>
     <span class="d-block" id="tempF" onclick="app.weathersController.fahToCel()" style="cursor: pointer"> ${this.convertFah()}F</span>
     <span class="d-none" id="tempC" onclick="app.weathersController.celToFah()" style="cursor: pointer"> ${this.convertCel()}C</span>
    <span> ${this.name}</span>
    </b></div>
    `
  }


  convertFah() {

    let fahrenheit = ((`${this.temp}` - 273.15) * 1.8) + 32
    return Math.floor(fahrenheit)

  }
  convertCel() {
    let celsius = `${this.temp}` - 273.15
    return Math.floor(celsius)

  }



}



// let carElem = document.getElementById('showcars')

// if (carElem.classList.contains('d-none')) {
//   carElem.classList.add('d-block')
//   carElem.classList.remove('d-none')
// } else {
//   carElem.classList.add('d-none')
//   carElem.classList.remove('d-block')
// }
//   }






