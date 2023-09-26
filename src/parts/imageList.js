const Part = require('./index')

const schema = {
  imageLinks: [String],
  clickLinks: [String]
}

module.exports = class ImageList extends Part {
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
    // @TODO
    const result = `<div class="banner imageList" id="part-${this.id}"></div>`

    return super.render(result)
  }
}
