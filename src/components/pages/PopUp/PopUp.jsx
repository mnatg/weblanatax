import React from "react";
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    Avatar,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core';
//Icons
import {
    Person
} from '@material-ui/icons';
//Auth
import 'firebase/auth';

const SimpleDialog = ({ onClose, open, lobby, title }) => {

    const handleClose = (userUid) => {
        onClose(userUid);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
            <List>
                {lobby.map((data) => (
                    <ListItem button onClick={() => handleListItemClick(data.userid)} key={data.userid}>
                        <ListItemAvatar>
                            <Avatar>
                                <Person />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.fullname} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default SimpleDialog;
