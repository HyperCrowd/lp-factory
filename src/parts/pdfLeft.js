const Part = require('./index')

const schema = {
  title: String,
  body: String,
  url: String
}

module.exports = class PdfLeft extends Part {
  /**
   * Gets the schema of the part
   */
  getSchema () {
    return { ...schema }
  }

  /**
   * Renders the part to HTML
   */
  render () {
    const result = `<div class="content PdfLeft" id="part-${this.id}">
      <h2 class="content-head is-center">Dolore magna aliqua. Uis aute irure.</h2>
      <div class="pure-g">
        <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
          <h4>${this.values.title}</h4>
          <p>${this.values.body}</p>
        </div>
        <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
          <form class="pure-form pure-form-stacked">
            <iframe
              class="airtable-embed"
              src="https://docs.google.com/viewerng/viewer?url=${this.values.url}&embedded=true"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="533"
              style="background: transparent; border: 1px solid #ccc;"
            ></iframe>
          </form>
        </div>
      </div>
    </div>`

    return super.render(result)
  }
}
