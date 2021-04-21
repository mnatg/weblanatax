
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Toast = ( message, type ) => {
    if(type === "error"){
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            hideProgressBar: true
        });
    } else if(type === "warning"){
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            hideProgressBar: true
        });
    } else if(type === "success"){
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            hideProgressBar: true
        });
    } else if(type === "info"){
        toast.info(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            hideProgressBar: true
        });
    }
}

export default Toast
