import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.quotes.forEach(q => {
    template +=
    `
        <div>
        <h3>${q.content}</h3>
        <h5>${q.author}</h5>
        </div>` })
  document.getElementById('quote').innerHTML = template
}

//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quotes", _draw);


    this.getQuote()
  }


  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}
