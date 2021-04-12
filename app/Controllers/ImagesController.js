import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _draw() {

  let bodyBackground = ProxyState.images;
  let template = ''
  bodyBackground.forEach(i => template += i.Template)
  document.getElementById("body-background").style.backgroundImage = template
}




//Public
export default class ImagesController {
  constructor() {
    ProxyState.on("images", _draw);


    this.getImage()
  }


  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}

