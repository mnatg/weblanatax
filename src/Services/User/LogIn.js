import { Config } from '../../Config/config'
import axios from 'axios'

export default async (uid) => {
  return axios({
    baseURL: Config.API_URL + "user/login/" + uid,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  }).then(({ data }) => {
    return data
  }).catch((err) => {
    console.error("Error al ingresar usuario: ", err)
    return (err)
  })
}