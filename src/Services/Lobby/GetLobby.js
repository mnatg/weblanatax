import api, { handleError } from '../../Services/index'
import { Config } from '../../Config/config'
import axios from 'axios'

export default async (uid) => {
    return axios({
        baseURL: Config.API_URL + "lobby/" + uid,
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 3000,
    }).then(({ data }) => {
        return data;
    }).catch((err) => {
        console.error("Error al cargar datos del lobby: ", err)
        return (err)
    })
}