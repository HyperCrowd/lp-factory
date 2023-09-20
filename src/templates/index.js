const Compiler = require('../compiler')
const compiler = new Compiler()
const fs = require('fs').promises
const { join } = require('path')

module.exports = class Template {
  constructor () {
    this.layout = []
  }

  /**
   *
   */
  async load (json = [], stack = []) {
    const elements = typeof json === 'string'
      ? JSON.parse(json)
      : json

    for (const element of elements) {
      if (element.merge !== undefined) {
        // Merge templates

        if (stack.indexOf(element.merge) > -1) {
          throw new RangeError('Template detected circular referencing: ' + JSON.stringify(stack))
        }

        stack.push(element.merge)

        // @TODO support https files
        const pathName = join(__dirname, element.merge + '.json')
        const template = await this.getTemplate(pathName)
        await this.load(template, stack)
      } else {
        // Add part
        this.add(element.name, element.prompt)
      }
    }

    return this
  }

  /**
   *
   */
  async getTemplate (filePath) {
    try {
      // Read the file asynchronously
      const fileContent = await fs.readFile(filePath, 'utf8')

      // Parse the JSON content into a JavaScript object
      const parsedData = JSON.parse(fileContent)

      return parsedData
    } catch (error) {
      // Handle any errors, e.g., file not found or invalid JSON
      console.error('Error reading or parsing the file:', error)
      throw error // Rethrow the error if needed
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
