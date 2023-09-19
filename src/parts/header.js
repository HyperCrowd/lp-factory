const Part = require('./index')

const schema = {
  items: [String],
  links: [String]
}

module.exports = class Header extends Part {
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
    let list = ''

    for (let i = 0; i <= this.values.items.length; i++) {
      list += `<li class="pure-menu-item">
        <a href="${this.values.links[i]}" class="pure-menu-link">${this.values.items[i]}</a>
      </li>`
    }

    const result = `<div class="header" id="part-${this.id}">
  <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
    <a class="pure-menu-heading" href="">Your Site</a>
    <ul class="pure-menu-list">
      ${list}
    </ul>
  </div>
</div>`

    return super.render(result)
  }
}
