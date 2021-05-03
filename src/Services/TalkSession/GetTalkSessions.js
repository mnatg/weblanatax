import { Config } from '../../Config/config'
import axios from 'axios'

export default async (uid) => {
  return axios({
    baseURL: Config.API_URL + "talk-session/"+ uid,
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  }).then(({ data }) => {
    return data
  }).catch((err) => {
    console.error("Error al listar salas de recepcion disponibles: ", err)
    return (err)
  })
}