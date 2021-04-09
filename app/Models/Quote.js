export default class Quote {
    constructor({ author, content }) {
        this.author = author
        this.content = content
    }

    get Template() {

        // return `
        // <div>
        // <h3>${this.content}</h3>
        // <h5>${this.author}</h5>
        // </div>
        // `
    }
}
