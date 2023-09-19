const Part = require('./index')

const schema = {
  text: String
}

module.exports = class Banner extends Part {
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
    const result = `<div class="banner" id="part-${this.id}">
      <h1 class="banner-head">
        ${this.values.text}
      </h1>
    </div>`

    return super.render(result)
  }
}
