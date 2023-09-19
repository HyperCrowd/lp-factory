const Banner = require('./parts/banner')
const Footer = require('./parts/footer')
const Four = require('./parts/four')
const Header = require('./parts/header')
const ImageLeft = require('./parts/imageLeft')
const ImageRight = require('./parts/imageRight')
const One = require('./parts/one')
const FormLeft = require('./parts/formLeft')
const FormRight = require('./parts/formRight')
const PdfLeft = require('./parts/pdfLeft')
const PdfRight = require('./parts/pdfRight')
const Pricing = require('./parts/pricing')
const Splash = require('./parts/splash')
const Three = require('./parts/three')
const Youtube = require('./parts/youtube')

const parts = {
  banner: Banner,
  footer: Footer,
  four: Four,
  header: Header,
  imageLeft: ImageLeft,
  imageRight: ImageRight,
  one: One,
  pdfLeft: PdfLeft,
  pdfRight: PdfRight,
  formLeft: FormLeft,
  formRight: FormRight,
  pricing: Pricing,
  splash: Splash,
  three: Three,
  youtube: Youtube
}

/**
 *
 */
module.exports = class Compiler {
  constructor (parts = []) {
    this.parts = parts
  }

  /**
   *
   */
  prepareInstance (schema) {
    const target = Object.keys(schema)

    const result = schema instanceof Array
      ? []
      : {}

    for (const key of target) {
      const value = schema[key]

      if (value === String) {
        result[key] = ''
      } else if (value === Number) {
        result[key] = 0
      } else if (value === Boolean) {
        result[key] = false
      } else if (value === Date) {
        result[key] = new Date()
      } else {
        if (typeof value === 'string') {
          result[key] = value
        } else {
          result[key] = this.prepareInstance(value)
        }
      }
    }

    return result
  }

  /**
   *
   */
  getInstance (partName, values) {
    const Part = this.getPart(partName)
    const part = new Part()
    const schema = part.getSchema()
    return this.prepareInstance(schema)
  }

  /**
   *
   */
  getPart (part) {
    return parts[part]
  }
}
