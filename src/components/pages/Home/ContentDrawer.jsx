import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    List, ListItem, ListItemText
} from '@material-ui/core';
// Styles
import '../../../assets/styles/Home/Home.scss'
import { makeStyles } from '@material-ui/core/styles';

const ContentDrawer = ({ onClose }) => {
    const useStyles = makeStyles((theme) => ({
        active: {
            marginLeft: "2em",
            fontSize: "1.2em",
            borderBottom: "1px solid #008f45"
        }
    }))
    const classes = useStyles();
    return (
        <div>
            <List component='nav'>
                <ListItem component={NavLink} to='/quienes-somos' activeClassName={classes.active} onClick={onClose} >
                    <ListItemText className="nav-links" primary='Quienes Somos' />
                </ListItem>
                <ListItem component={NavLink} to='/que-hacemos' activeClassName={classes.active} onClick={onClose} >
                    <ListItemText className="nav-links" primary='Que Hacemos' />
                </ListItem>
            </List>
        </div>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default ContentDrawer