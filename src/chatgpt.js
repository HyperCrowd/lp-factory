const { RemoteLanguageModel, LanguageModelInput } = require('intellinode')

const langModel = new RemoteLanguageModel(process.env.OPENAI_KEY, 'openai')

const modelName = 'text-davinci-003'

exports.prompt = async function (prompt, temperature = 0.7, model = modelName) {
  const results = await langModel.generateText(new LanguageModelInput({
    prompt,
    model,
    temperature
  }))

  return results
}
