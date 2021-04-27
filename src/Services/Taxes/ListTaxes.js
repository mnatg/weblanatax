import api, { handleError } from '@/Services'
import { Config } from '@/Config'
import axios from 'axios'

export default async (uid) => {
    return axios({
        baseURL: Config.API_URL + "tax/users/" + uid,
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data;
    }).catch((err) => {
        console.error("Error al listar impuestos: ", err)
        return (err)
    })
}