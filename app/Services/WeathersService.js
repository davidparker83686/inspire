import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js"

class WeathersService {

  async getWeather() {
    console.log('cathair')
    let res = await weatherApi.get()
    ProxyState.weathers = [...ProxyState.weathers, new Weather(res.data)]
  }
}

export const weathersService = new WeathersService();

