const Part = require('./index')

const schema = {
  upperLeft: {
    title: String,
    body: String
  },
  upperRight: {
    title: String,
    body: String
  },
  lowerLeft: {
    title: String,
    body: String
  },
  lowerRight: {
    title: String,
    body: String
  }
}

module.exports = class Four extends Part {
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
    const result = `<div class="information pure-g four" id="part-${this.id}">
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="l-box">
      <h3>${this.values.upperLeft.title}</h3>
      <p>${this.values.upperLeft.body}</p>
    </div>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="l-box">
      <h3>${this.values.upperRight.title}</h3>
      <p>${this.values.upperRight.body}</p>
    </div>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="l-box">
      <h3>${this.values.lowerLeft.title}</h3>
      <p>${this.values.lowerLeft.body}</p>
    </div>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="l-box">
      <h3>${this.values.lowerRight.title}</h3>
      <p>${this.values.lowerRight.body}</p>
    </div>
  </div>
</div>`

    return super.render(result)
  }
}
