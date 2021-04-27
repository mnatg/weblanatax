import api, { handleError } from '@/Services'
import { Config } from '@/Config'
import axios from 'axios'

export default async (args) => {
  
  const data = { 'email': args.email };

  axios({
    baseURL: Config.API_URL +"users",
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: args,
    timeout: 3000,
  }).then((data)=> {
    console.log(data)
  }).catch((err) => {
    console.error("ERROR")
  })
  //const response = await api.post(`users`, args)
  return {}
}
