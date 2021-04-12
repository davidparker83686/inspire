
import { ProxyState } from "../AppState.js"

export default class ToDo {
    constructor({ id, completed, user, description }) {
        this.id = id
        this.completed = completed || false
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



/* <div>${this.totalCompleted()}/ ${this.total()}</div> */

