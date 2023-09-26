const { parseHash } = require('../hash')
const Compiler = require('../compiler')
const compiler = new Compiler()
const fs = require('fs').promises
const { join } = require('path')
const Part = require('../parts')

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
      if (element.template !== undefined) {
        // Merge templates

        if (stack.indexOf(element.template) > -1) {
          throw new RangeError('Template detected circular referencing: ' + JSON.stringify(stack))
        }

        stack.push(element.template)

        // @TODO support https files
        const pathName = join(__dirname, element.template + '.json')
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
    let id = 0

    for (const partData of this.layout) {
      const part = compiler.getInstance(partData.name, id)

      console.log({
        [id]: part.render()
      })

      id += 1

      result += part.render() + '\n'
    }

    result += `<script>
window.onload = () => {
  const flags = ${parseHash.toString()}(${JSON.stringify(json)})

  const newOrder = flags.order;

  if (flags.order.length === 0) {
    return
  }

  const container = document.body; // You can replace this with the appropriate container element

  newOrder.map(id => document.getElementById('part-' + id));

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  newOrder.forEach(div => {
      container.appendChild(div);
  })
}
</script>`

    return result
  }
}
