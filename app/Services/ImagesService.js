import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { imagesApi } from "./AxiosService.js"

class ImagesService {

  async getImage() {
    console.log('pear')
    let res = await imagesApi.get()
    ProxyState.images = [...ProxyState.images, new Image(res.data)]
  }
}

export const imagesService = new ImagesService();

