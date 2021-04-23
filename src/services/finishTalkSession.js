import { Config } from '../config/config';
import axios from 'axios'

export default (sessionId) => {
    return axios({
        baseURL: Config.API_URL + "talk-session/finish/" + sessionId,
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err)
        throw err
    })
}