import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";


//Private
function _draw() {
  let todos = ProxyState.todos;
  let template = ''
  if (todos.length == 0) { template += '<div class="col text-center text-white"><p><em>no todos! :)</em><p></div>' }
  todos.forEach(p => template += p.Template)
  document.getElementById("todo").innerHTML = template
}

//Public
export default class ToDosController {
  constructor() {
    ProxyState.on("todos", _draw);

    this.getToDos()
  }

  addToDos() {
    window.event.preventDefault()
    let form = window.event.target
    let rawToDo = {
      description: form['description'].value,
    }
    toDosService.addToDos(rawToDo)
    form.reset()
  }

  async deleteToDos(id) {
    try {
      toDosService.deleteToDos(id)
    } catch (error) {
      console.error(error)
    }
  }


  async getToDos() {
    try {

      await toDosService.getToDos()

    } catch (error) {
      console.error(error)
    }
  }



  // totalCompleted(id) {
  //   listsService.totalCompleted(id)
  // }


}
