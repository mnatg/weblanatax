//import api, { handleError } from '../../Services'
import { Config } from '../../Config/config'
import axios from 'axios'
import Chat from '../../Services/Chat/index'


export function* loadRoom(action) {
  let data = {
    email: action.payload.email.toLowerCase(),
    room_type: "support"
  }
  try {
    axios({
      baseURL: Config.API_URL +"connect_conversation",
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: data,
      timeout: 3000,
    }).then(({ data })=> {
      return data
    }).catch((err) => {
      console.error("Error al crear usuario: ", err)
      return(err)
    })
  } catch (err) {
    console.error("Error al traer historial del chat", err)
  }
}
