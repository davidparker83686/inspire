import QuotesController from "./Controllers/QuotesController.js";
import ToDosController from "./Controllers/ToDosController.js";
import ClocksController from "./Controllers/ClocksController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  quotesController = new QuotesController();
  toDosController = new ToDosController();
  clocksController = new ClocksController();
  weathersController = new WeathersController();
}

window["app"] = new App();
