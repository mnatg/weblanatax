import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button
} from '@material-ui/core';
//component
import Toast from '../../../utils/Toast';
//Auth
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';


const SimpleDialog = ({ onClose, open, title }) => {
    const [email, setEmail] = useState('');
    const firebase = useFirebaseApp();
    const handleClose = (userUid) => {
        onClose(userUid);
    };

    const validation = async () => {
        if (email.length === 0) {
            return Toast("Debe ingresar un correo", "error");
        }
        else {
            return signIn();
        }
    }

    // Ingreso/creación de usuario
    const signIn = async () => {
        await firebase.auth().sendPasswordResetEmail(email)
            .then((data) => {
                Toast("Revisa tu correo para reinicio de la contraseña", "success");
            })
            .catch((err) => {
                if (err.code === "auth/invalid-email") {
                    Toast("Correo invalido", "error");
                } else {
                    Toast("Ha ocurrido un error al enviar correo de vericacion", "error");
                }
            });
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ingresa tu correo electrónico para recuperar tu contraseña
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Email"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => validation()} color="primary">
                    Enviar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SimpleDialog;