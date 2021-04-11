import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.weathers.forEach(w => {
    template +=
      `

    <div> <span>${w.icon}</span>     <span onclick="app.weathersController.conversion()">${w.temp}</span>  </div>
    <div>${w.name}</div>
    ` })

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
}
