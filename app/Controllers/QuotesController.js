import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.quotes.forEach(q => {
    template +=
      `
        <div>
          <div onmouseover="app.qoutesController.showtext(x)">
            <h5>${q.content}</h5>
              <div class="mb-0 mb-md-3" id="hiddenttext">
                <span>${q.author}</span>
            </div>
          </div>
        </div>` })
  document.getElementById('quote').innerHTML = template
}

function showtext(x) {
  let textElem = document.getElementById('hiddentext')

  if (textElem.classList.contains('d-none')) {
    textElem.classList.add('d-block')
    textElem.classList.remove('d-none')
  } else {
    textElem.classList.add('d-none')
    textElem.classList.remove('d-block')
  }
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
