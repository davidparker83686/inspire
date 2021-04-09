import QuotesController from "./Controllers/QuotesController.js";
import ToDosController from "./Controllers/ToDosController.js";

class App {
  quotesController = new QuotesController();
  toDosController = new ToDosController();
}

window["app"] = new App();
