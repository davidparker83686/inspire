
import { ProxyState } from "../AppState.js"

export default class ToDo {
    constructor({ id, completed, user, description }) {
        this.id = id
        this.completed = completed
        this.user = user
        this.description = description
    }


    get Template() {
        return `
                    <div class="form-check">
                    <input ${this.completed == true ? 'checked' : ""} class="form-check-input" type="checkbox" value="" title='done' onclick="app.toDosController.toDosCompleted('${this.id}')">
                    <p>${this.description}<span class="ml-2 text-danger" title="delete" style="cursor: pointer" onclick="app.toDosController.deleteToDos('${this.id}')">-</span></p>
                    </div>
                    `
    }
}













// for done over total
{/* <h5 class="card-title"> ${this.totalCompleted()}/${this.total()}</h5>




get Lists() {
    let ings = ProxyState.lists.filter(i => i.taskId === this.id)
    let template = ''
    ings.forEach(i => template += i.Template)
    return template
}

total() {
    let tasks = ProxyState.lists.filter(i => i.taskId === this.id)
    return tasks.length
}

totalCompleted() {
    let totalCompleted = ProxyState.lists.filter(i => i.taskId === this.id && i.completed)
    return this.total() - totalCompleted.length
} */}