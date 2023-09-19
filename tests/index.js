const defaultTemplate = require('../src/templates/default.json')
const Template = require('../src/templates')

async function main () {
  const page = new Template(defaultTemplate)
  const layout = page.getLayout()
  // const html = page.render(layout)
  console.log(layout)
  // console.log(html)
}

main()
