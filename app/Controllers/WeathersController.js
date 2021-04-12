import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _draw() {
  let weather = ProxyState.weathers;
  let template = ''
  weather.forEach(w => template += w.Template)
  document.getElementById('weather').innerHTML = template
}


//Public
export default class WeathersController {
  constructor() {
    ProxyState.on("weathers", _draw);
    this.getWeather()
  }


  async getWeather() {
    try {
      console.log(ProxyState.weathers)
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }

  fahToCel() {
    let fah = document.getElementById('tempF')
    let cel = document.getElementById('tempC')

    if (fah.classList.contains('d-none')) {
      fah.classList.add('d-block')
      fah.classList.remove('d-none')
      cel.classList.add('d-none')
      cel.classList.remove('d-block')


    } else {
      fah.classList.add('d-none')
      fah.classList.remove('d-block')
      cel.classList.add('d-block')
      cel.classList.remove('d-none')
    }
  }

  celToFah() {
    let cel = document.getElementById('tempC')
    let fah = document.getElementById('tempF')

    if (cel.classList.contains('d-none')) {
      cel.classList.add('d-block')
      cel.classList.remove('d-none')
      fah.classList.add('d-none')
      fah.classList.remove('d-block')


    } else {
      cel.classList.add('d-none')
      cel.classList.remove('d-block')
      fah.classList.add('d-block')
      fah.classList.remove('d-none')
    }


  }









}

