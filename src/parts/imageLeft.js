const Part = require('./index')

const schema = {
  image: String,
  imageAlt: String,
  imageWidth: Number,
  clickLink: String,
  title: String,
  body: String
}

module.exports = class LeftImage extends Part {
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
    const imageWidth = this.values.imageWidth || 300

    const image = this.values.clickLink !== undefined
      ? `<a href="${this.values.clickLink}" target="_blank"><img width="${imageWidth}" alt="${this.values.imageAlt}" class="pure-img-responsive" src="${this.values.image}"></a>`
      : `<img width="${imageWidth}" alt="${this.values.imageAlt}" class="pure-img-responsive" src="${this.values.image}">`

    const result = `<div class="ribbon l-box-lrg pure-g imageLeft" id="part-${this.id}">
      <div class="l-box-lrg is-center pure-u-1 pure-u-md-5-12 pure-u-lg-5-12">
        ${image}
      </div>
      <div class="pure-u-1-2">
        <h2 class="content-head content-head-ribbon">${this.values.title}</h2>
        <p>${this.values.body}</p>
      </div>
      <div class="pure-u-1-24">
        <div class="l-box"></div>
      </div>
    </div>`

    return super.render(result)
  }
}
