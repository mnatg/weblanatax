import api, { handleError } from '../index'
import { Config } from '../../Config/config'
import axios from 'axios'

export default async (data) => {
    return axios({
        baseURL: Config.API_URL + "notification/email",
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: data,
        timeout: 3000,
    }).then(({ data }) => {
        return data
    }).catch((err) => {
        console.error("Error al enviar mail: ", err)
        throw (err);
    })
}

