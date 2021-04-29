import api, { handleError } from '@/Services'
import { Config } from '@/Config'

export default async () => {
  try {
    const response = await api.get(Config.API_URL + "taxes")
    return response ? response.data : [];
  } catch (err) {
    console.error("Error al cargar los taxes: ", err)
    return [];
  }
}
