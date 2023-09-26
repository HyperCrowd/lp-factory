const Part = require('./index')

const schema = {
  faIcon: String,
  title: String,
  subtitle: String,
  body: String
}

module.exports = class One extends Part {
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
    const icon = this.values.faIcon
      ? `<i class="fa fa-${this.values.faIcon}"></i>`
      : ''

    const result = `<div class="content one" id="part-${this.id}">
      <h2 class="content-head is-center">${this.values.title}</h2>
      <div class="pure-g">
        <div class="l-box pure-u-1 is-center">
          <h3 class="content-subhead">
              ${icon}
              ${this.values.subtitle}
            </h3>
          <p>${this.values.body}</p>
        </div>
      </div>
    </div>`

    return super.render(result)
  }
}
