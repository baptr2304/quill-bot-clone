import { GoogleGenerativeAI } from '@google/generative-ai'

export async function useGenAi (modelType : any) {
  const VITE_GOOGLE_AI_STUDIO_API_KEY = import.meta.env.VITE_GOOGLE_AI_STUDIO_API_KEY
  const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_STUDIO_API_KEY)
  const model = genAI.getGenerativeModel({ model: modelType })
  return model
}