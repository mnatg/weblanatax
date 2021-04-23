
import { Config } from '../config/config';
import axios from 'axios'

export default (taxid) => {
    return axios({
        baseURL: Config.API_URL + "tax/store/" + taxid,
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al consumir servicio:", err);
        throw err
    })
}