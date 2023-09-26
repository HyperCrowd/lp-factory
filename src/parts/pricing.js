const Part = require('./index')

const schema = {
  first: {
    title: String,
    currency: String,
    price: Number,
    interval: String,
    features: [String],
    buttonLink: String,
    buttonText: String,
    classes: String
  },
  second: {
    title: String,
    price: Number,
    interval: String,
    features: [String],
    buttonLink: String,
    buttonText: String,
    classes: String
  },
  third: {
    title: String,
    price: Number,
    interval: String,
    features: [String],
    buttonLink: String,
    buttonText: String,
    classes: String
  }
}

module.exports = class Pricing extends Part {
  /**
   * Gets the schema of the part
   */
  getSchema () {
    return { ...schema }
  }

  /**
   *
   */
  getFeatures (features) {
    let result = ''

    for (const feature of features) {
      result += `<li>${feature}</li>`
    }

    return result
  }

  /**
   * Renders the part to HTML
   */
  render () {
    const result = `<div class="l-content pricing" id="part-${this.id}">
      <div class="pricing-tables pure-g">
        <div class="pure-u-1 pure-u-md-1-3">
          <div class="pricing-table ${this.values.first.classes || ''}">
            <div class="pricing-table-header">
              <h2>${this.values.first.title}</h2>
              <span class="pricing-table-price">
                ${this.values.first.currency}${this.values.first.price}
                <span>${this.values.first.interval}</span>
              </span>
            </div>
            <ul class="pricing-table-list">
              ${this.getFeatures(this.values.first.features)}
            </ul>
            <button class="button-choose pure-button" href="${this.values.first.buttonLink}">
              ${this.values.first.buttonText}
            </button>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-1-3">
          <div class="pricing-table ${this.values.second.classes || ''}">
            <div class="pricing-table-header">
              <h2>${this.values.second.title}</h2>
              <span class="pricing-table-price">
                ${this.values.second.currency}${this.values.second.price}
                <span>${this.values.second.interval}</span>
              </span>
            </div>
            <ul class="pricing-table-list">
              ${this.getFeatures(this.values.second.features)}
            </ul>
            <button class="button-choose pure-button" href="${this.values.second.buttonLink}">
              ${this.values.second.buttonText}
            </button>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-1-3">
          <div class="pricing-table ${this.values.third.classes || ''}">
            <div class="pricing-table-header">
              <h2>${this.values.third.title}</h2>
              <span class="pricing-table-price">
                ${this.values.third.currency}${this.values.third.price}
                <span>${this.values.third.interval}</span>
              </span>
            </div>
            <ul class="pricing-table-list">
              ${this.getFeatures(this.values.third.features)}
            </ul>
            <button class="button-choose pure-button" href="${this.values.third.buttonLink}">
              ${this.values.third.buttonText}
            </button>
          </div>
        </div>
      </div>`

    return super.render(result)
  }
}
