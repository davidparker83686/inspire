import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.images.forEach(i => {
    template +=
      `
  "url( ${i.url}  )"
  ` })
  // document.body.style.backgroundImage = 'url${ i.url }'
  document.getElementById('image').innerHTML = template
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

