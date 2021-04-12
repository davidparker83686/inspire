import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { todoApi } from "../Services/AxiosService.js"

class ToDosService {
  async addToDos(rawToDo) {
    let res = await todoApi.post('', rawToDo)
    ProxyState.todos = [...ProxyState.todos, new ToDo(res.data)]
  }

  async getToDos() {
    let res = await todoApi.get()
    ProxyState.todos = res.data.map(p => new ToDo(p))
  }

  async deleteToDos(id) {
    await todoApi.delete('' + id)
    ProxyState.todos = ProxyState.todos.filter(todos => todos.id != id)
  }

  async toDosCompleted(id) {

    let todoz = ProxyState.todos.find(t => t.id == id)

    if (todoz.completed == true) {
      todoz.completed = false
    } else if (todoz.completed == false) {
      todoz.completed = true
    }

    await todoApi.put('' + id, todoz)
    ProxyState.todos = ProxyState.todos
  }
}





export const toDosService = new ToDosService();