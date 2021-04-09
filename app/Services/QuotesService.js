import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { quotesApi } from "./AxiosService.js"

class QuotesService {

  async getQuote() {
    console.log('hello')
    let res = await quotesApi.get()
    ProxyState.quotes = [...ProxyState.quotes, new Quote(res.data)]
  }
}

export const quotesService = new QuotesService();

