
import { Config } from '../config/config';
import axios from 'axios'

export default (sessionId) => {
    return axios({
        baseURL: Config.API_URL + "lobby/listUsers/" + sessionId,
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err);
        throw err
    })
}