import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { todoApi } from "../Services/AxiosService.js"

class ToDosService {
  async addToDos(rawToDo) {
    console.log('hello')
    let res = await todoApi.post('', rawToDo)
    ProxyState.todos = [...ProxyState.todos, new ToDo(res.data)]
    console.log(ProxyState.todos);
  }


  async getToDos() {
    let res = await todoApi.get()
    ProxyState.todos = res.data.map(p => new ToDo(p))
  }

  async deleteToDos(id) {
    await todoApi.delete('' + id)
    ProxyState.todos = ProxyState.todos.filter(todos => todos.id != id)
  }



}



export const toDosService = new ToDosService();

