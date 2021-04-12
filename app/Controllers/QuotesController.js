import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.quotes.forEach(q => {
    template +=
      `
          <div>
            <div><h5>${q.content}</h5></div>
            <div><span id="author" class='d-none'>${q.author}</span></div>
          </div>
      ` })
  document.getElementById('quote').innerHTML = template
}

// function show() {
//   let authorElem = document.getElementById('author')

//   if (authorElem.classList.contains('d-none')) {
//     authorElem.classList.add('d-block')
//     authorElem.classList.remove('d-none')
//   } else {
//     authorElem.classList.add('d-none')
//     authorElem.classList.remove('d-block')
//   }
// }






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
