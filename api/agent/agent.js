import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '../_prompt.js';

export default async function handler(req, res) {
  // Check for Prod key first, fallback to Dev key
  const apiKey = process.env.GEMINI_API_KEY || process.env.DEV_GEMINI_API_KEY;
  const prompt = req.body;
  
  if (!apiKey) {
    return res.status(500).send('System offline');
  }

  const ai = new GoogleGenAI({apiKey: apiKey});

  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_PROMPT
    }
  })

  const response = await chat.sendMessage({message: prompt})

  return res.status(200).send(response.text)
}

// if (req.method !== 'POST') {
  //   return res.status(405).json({ error: 'Method Not Allowed' });
  // }

  // try {
  //   const { prompt } = req.body;
  //   const apiKey = process.env.GEMINI_API_KEY;
    
  //   if (!apiKey) {
  //     return res.status(500).json({ error: 'API key is missing' });
  //   }

  //   const ai = new GoogleGenerativeAI({ apiKey });
  //   const response = await ai.models.generateContent({
  //     model: 'gemini-2.5-flash',
  //     contents: prompt,
  //   });

  //   return res.status(200).json({ text: response.text });
  // } catch (error) {
  //   console.error('Error calling Gemini:', error);
  //   return res.status(500).json({ error: 'Internal Server Error' });
  // }