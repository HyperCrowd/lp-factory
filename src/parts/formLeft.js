const Part = require('./index')

const schema = {}

module.exports = class FormLeft extends Part {
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
    const result = `<div class="content" id="part-${this.id}">
      ${this.values.html}
    </div>`

    return super.render(result)
  }
}
