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



// document.getElementById("toDoComplete").innerHTML = `${ProxyState.todos.length}`

// function total() {
//   let templateT=''
//   ProxyState.todos.forEach(q => {
//     template +=
//       `
// ${q.content}

//       ` })

// }

// function totalCompleted() {
//   let totalCompleted = ProxyState.todos.filter(t => t.completed == true)
//   return totalCompleted.length
// }




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




//Public
export default class ToDosController {
  constructor() {
    ProxyState.on("todos", _draw);

    this.getToDos()
  }

  addToDos() {
    console.log('cathair')
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

  async toDosCompleted(id) {
    try {
      await toDosService.toDosCompleted(id)

    } catch (error) {
      console.error(error)
    }
  }


}
