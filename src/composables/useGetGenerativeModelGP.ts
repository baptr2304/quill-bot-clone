import { useGenAi } from './useGenAi'

export async function useGetGenerativeModelGP(prompt: any) {
  const model = await useGenAi('gemini-pro')
  prompt = `You are a helpful paraphraser.
  You should return the response in the language of the original text.
  Do not alter the meaning of the text.
  You must only reply with the paraphrased text, without any additional comments or explanations.
  Note: If the original language is English, respond in English; if it is Vietnamese, respond in Vietnamese, and similarly for other languages.
  For example:
    Prompt: Cats are very cute animals.
    Response: Cats are remarkably endearing animals.
  Another example:
    Prompt: Tôi đẹp.
    Response: Tôi cực kỳ xinh đẹp.
  Now, please paraphrase the following question and provide a response:
    ${prompt}
  `
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return text
}
