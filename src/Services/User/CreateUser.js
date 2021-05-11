import api, { handleError } from '../../Services/index'
import { Config } from '../../Config/config'
import axios from 'axios'

export default async (user) => {
  return axios({
    baseURL: Config.API_URL +"user",
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: user,
    timeout: 3000,
  }).then(({ data })=> {
    return data
  }).catch((err) => {
    console.error("Error al crear usuario: ", err)
    throw (err);
  })
}

