
import { Config } from '../config/config';
import axios from 'axios'

export default (id) => {
    return axios({
        baseURL: Config.API_URL + "consultancy-room/close/" + id,
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://apilanatax.com'
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err);
        throw err
    })
}