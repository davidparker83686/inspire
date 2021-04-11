export default class Weather {
  constructor({ temp, icon, name }) {
    this.temp = temp
    this.icon = icon || weather.icon
    this.name = name

  }
  get Template() {
    return `
    `
  }
}






