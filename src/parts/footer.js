const Part = require('./index')

const schema = {
  html: String
}

module.exports = class Footer extends Part {
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
    const result = `<div class="footer l-box" id="part-${this.id}">
      ${this.values.html}
    </div>`

    return super.render(result)
  }
}
