import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button

} from '@material-ui/core';
//util
import IdleTimer from 'react-idle-timer';
//Auth
import 'firebase/auth';


const SimpleDialog = ({ onClose, open, onIdle }) => {

    const handleOnIdle = () => {
        onIdle();
        onClose();
    }

    return (
        <Dialog className="popup-idle"
            onClose={() => onClose()} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>Inactividad </DialogTitle>
            <p>¿Sigues conectado?</p>
            <DialogActions>
                <Button onClick={handleOnIdle} variant="outlined" className="button-idle">
                    no
                </Button>
                <Button onClick={() => onClose()} variant="outlined" className="button-active">
                    si
                </Button>
                <IdleTimer
                    timeout={1000 * 60 * 3}
                    onIdle={handleOnIdle}
                    debounce={500}
                />
            </DialogActions>
        </Dialog>
    );
}

export default SimpleDialog;
