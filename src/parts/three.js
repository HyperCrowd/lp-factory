const Part = require('./index')

const schema = {
  left: {
    faIcon: String,
    title: String,
    body: String
  },
  middle: {
    faIcon: String,
    title: String,
    body: String
  },
  right: {
    faIcon: String,
    title: String,
    body: String
  }
}

module.exports = class Three extends Part {
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
      <h2 class="content-head is-center">Excepteur sint occaecat cupidatat.</h2>
      <div class="pure-g">
        <div class="l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
          <h3 class="content-subhead">
              <i class="fa fa-${this.values.left.faIcon}"></i>
              ${this.values.left.title}
            </h3>
          <p>${this.values.left.body}</p>
        </div>
        <div class="l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
          <h3 class="content-subhead">
              <i class="fa fa-${this.values.middle.faIcon}"></i>
              ${this.values.middle.title}
            </h3>
          <p>${this.values.middle.body}</p>
        </div>
        <div class="l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
          <h3 class="content-subhead">
                <i class="fa fa-${this.values.right.faIcon}"></i>
                ${this.values.right.title}
            </h3>
          <p>${this.values.right.body}</p>
        </div>
      </div>
    </div>`

    return super.render(result)
  }
}
