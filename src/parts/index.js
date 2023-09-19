let partId = 0

module.exports = class Part {
  constructor (audiences) {
    this.audiences = audiences
    this.id = partId
    partId += 1
    this.values = {}
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
    html += `<script>
  const audiences = ${JSON.stringify(this.audiences)}

  const audience = window.location.hash.startsWith('#')
    ? window.location.hash.slice(1)
    : window.location.hash

  const values = audiences[audience]

  document.addEventListener("DOMContentLoaded", function () {
    var part = document.getElementById("part-${this.id}");

    for (const key of values) {
      const value = values[key]
      const regexp = new RegExp('${this.id}.' + key, 'g')
      part.innerHTML = part.innerHTML.replace(regexp, value);
    }
  });
</script>`

    return html
  }
}
