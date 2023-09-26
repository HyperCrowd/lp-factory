require('dotenv')
const defaultTemplate = require('../src/templates/default.json')
const Template = require('../src/templates')

async function main () {
  // Load mergable templates
  const page = new Template()
  await page.load(defaultTemplate)
  const layout = page.getLayout()

  // populate the layout with chatGPT then render based on it

  console.log(page.render(layout))
}

main()
