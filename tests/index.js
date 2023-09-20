const defaultTemplate = require('../src/templates/default.json')
const Template = require('../src/templates')

async function main () {
  // Load mergable templates
  const page = new Template()
  await page.load(defaultTemplate)
  const layout = page.getLayout()
  console.log(layout)

  // const html = page.render(layout)
  // console.log(html)
}

main()
