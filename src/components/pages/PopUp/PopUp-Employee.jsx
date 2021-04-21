import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    MenuItem
} from '@material-ui/core';
// Utils
import Toast from '../../../utils/Toast';
// Services
import EmployeeService from '../../../services/createEmployee';
import EditEmployeeService from '../../../services/editEmployee';

const SimpleDialog = ({ onClose, open, title, data, create }) => {

    const [uid, setUid] = useState(data.uid);
    const [fullname, setFullname] = useState(data.fullname);
    const [lastsign, setLastsign] = useState(data.lastsign);
    const [type, setType] = useState(data.type);
    const [state, setState] = useState(data.state);

    const [email, setEmail] = useState('');

    const [types, setTypes] = useState([
        {
            value: 'receptionist',
            label: 'Recepcionista'
        },
        {
            value: 'advicer',
            label: 'Consultor'
        },
        {
            value: 'supervisor',
            label: 'Supervisor'
        }
    ])

    const handleChange = (event) => {
        setType(event.target.value);
      };
    const handleClose = () => {
        onClose();
    }
    const reset = () => {
        setUid(data.uid);
        setFullname(data.fullname);
        setLastsign(data.lastsign);
        setType(data.type);
        setState(data.state);
    }
    const validation = () => {
        if (fullname.length == 0 || type.length == 0) {
            Toast("Todos los campos son requeridos.", "error");
        } else if (email.length == 0 && create) {
            Toast("Todos los campos son requeridos.", "error");
        }else if (types.includes(type)) {
            Toast("Seleccione un rol valido.", "error");
        }else{
            let data = {
                uid: uid,
                fullname: fullname,
                lastsign: lastsign,
                type: type,
                state: state
            }
            if (create) {
                setEmail(email.toLowerCase());
                data.lastsign = new Date();
                addEmployee(data);
                Toast("Usuario creado con exito", "success");
            } else {
                editEmployee(data);
                Toast("Usuario modificado con exito", "success");
            }
            handleClose();
        }
    }

    const addEmployee = async (data) => {
        data.uid = email;
        try {
            await EmployeeService(data);
        } catch (err) {
            console.error("Error al crear empleado: ", err);
            Toast("Error al crear empleado.", "error");
        }
    }

    const editEmployee = async (data) => {
        try{
            await EditEmployeeService(data);
        } catch (err) {
            console.error("Error al editar empleado: ", err);
            Toast("Error al editar empleado.", "error");
        }
    }

    return (
        <Dialog onClose={() => onClose()} onRendered={reset}
         aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Información del empleado:
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="Fullname"
                    label="Nombre"
                    defaultValue={data.fullname}
                    required
                    fullWidth
                    onChange={(e) => setFullname(e.target.value)}
                />
                { create &&
                <>
                <TextField
                    margin="dense"
                    id="Email"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="Type"
                  select
                  label="Rol"
                  required
                  fullWidth
                  defaultValue={data.type}
                  value={type}
                  onChange={handleChange}
                >
                  {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                </>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={validation} color="primary">
                    {create ? 'Crear' : 'Editar'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SimpleDialog;