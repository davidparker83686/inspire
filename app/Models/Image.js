export default class Image {
    constructor({ id, url, large_url, source_id, copyright, site }) {
        this.id = id
        this.url = url
        this.large_url = large_url
        this.source_id = source_id
        this.copyright = copyright
        this.site = site
    }

    get Template() {

        return /*html*/`

        `
    }
}
