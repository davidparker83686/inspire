import Quote from "./Models/Quote.js"
import ToDo from "./Models/ToDo.js"
import Weather from "./Models/Weather.js"
import Image from "./Models/Image.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {

  weathers = []
  quotes = []
  images = []

  /** @type {ToDo[]} */
  todos = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
