import { Config } from '../config/config';
import axios from 'axios'

export default (data) => {
    return axios({
        baseURL: Config.API_URL + "employee",
        method: 'put',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        data: data,
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err)
        throw err
    })
}