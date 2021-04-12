import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";
import ClocksController from "./Controllers/ClocksController.js";
import WeathersController from "./Controllers/WeathersController.js";
import ToDosController from "./Controllers/ToDosController.js";

class App {
  quotesController = new QuotesController();
  clocksController = new ClocksController();
  weathersController = new WeathersController();
  imagesController = new ImagesController();
  toDosController = new ToDosController();
}

window["app"] = new App();
