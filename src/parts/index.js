let partId = 0

module.exports = class Part {
  constructor (values = {}, id) {
    this.id = id === undefined
      ? partId
      : id

    partId += 1
    this.values = values
  }

  /**
   * Gets the schema of the part
   */
  getSchema () {
    throw new Error('Schema must be defined for a Part!')
  }

  /**
   * Renders the part to HTML
   */
  render (html) {
    return html
  }
}
