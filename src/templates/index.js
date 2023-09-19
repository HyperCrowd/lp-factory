const Compiler = require('../compiler')
const compiler = new Compiler()

module.exports = class Template {
  constructor (json = []) {
    const elements = typeof json === 'string'
      ? JSON.parse(json)
      : json

    this.layout = []

    for (const element of elements) {
      this.add(element.name, element.prompt)
    }
  }

  /**
   *
   */
  add (partName, prompt) {
    const result = {
      name: partName,
      prompt,
      values: compiler.getInstance(partName)
    }

    this.layout.push(result)

    return result
  }

  /**
   *
   */
  getLayout () {
    return JSON.stringify(this.layout, null, 2)
  }

  /**
   *
   */
  render (json = this.layout) {
    this.layout = typeof json === 'string'
      ? JSON.parse(json)
      : json

    let result = ''

    for (const partData of this.layout) {
      const part = compiler.getInstance(partData.name)
      result += part.render()
    }

    return result
  }
}
