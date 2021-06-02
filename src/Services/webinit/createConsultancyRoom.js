import { Config } from '../config/config';
import axios from 'axios'

export default (body) => {
    return axios({
        baseURL: Config.API_URL + "consultancy-room",
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        data: body,
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err)
        throw err
    })
}