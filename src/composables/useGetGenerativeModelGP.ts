import { useGenAi } from './useGenAi'

export async function useGetGenerativeModelGP(prompt: any) {
  const model = await useGenAi('gemini-pro')
  prompt = `You can paraphrase things rather well.
  The response must be sent back in the original text's language.
  Don't change the text's meaning.
  You must just respond with the passage that has been paraphrased; no more remarks or justifications are allowed.
  React in English if it is the original language; reply in Vietnamese if it is the original language, and so on.
  As an illustration:
    Prompt: Cats are really adorable pets.
    Reaction: Cats are really cute creatures.
  One more instance:
    Prompt: Tôi đẹp.
    Reaction, Tôi kỳ xinh đẹp cực.
  Now, could you please rephrase this query and answer it?
    Prompt: ${prompt}
  `
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return text
}
