import api, { handleError } from '@/Services'
import { Config } from '@/Config'
import axios from 'axios'

export default async (chatId) => {
  if (!chatId || chatId == null) {
    return handleError({ message: 'User ID is required' })
  }
  let response
  try {
    response = await api.get(`conversations/${chatId}`)
  } catch (err) {
    console.error("Error al traer historial del chat", err)
  }
  return response ? response.data.data != null ? response.data.data : [] : [];
}

