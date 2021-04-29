import api, { handleError } from '@/Services'
import { Config } from '@/Config'
import axios from 'axios'

export default async (data) => {
  return axios({
    baseURL: Config.API_URL + "notification",
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
    timeout: 3000,
  }).then(({ data }) => {
    return data
  }).catch((err) => {
    console.error("Error al notificar: ", err);
    throw (err);
  })
}

