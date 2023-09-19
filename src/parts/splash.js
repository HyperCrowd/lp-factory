const Part = require('./index')

const schema = {
  title: String,
  body: String,
  buttonLink: String,
  buttonText: String
}

module.exports = class Splash extends Part {
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
    const result = `<div class="splash-container" id="part-${this.id}">
    <div class="splash">
      <h1 class="splash-head">${this.values.title}</h1>
      <p class="splash-subhead">${this.values.body}</p>
      <p>
        <a href="${this.values.buttonLink}" class="pure-button pure-button-primary">${this.values.buttonText}</a>
      </p>
    </div>
  </div>`

    return super.render(result)
  }
}
