import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    List, ListItem, ListItemText
} from '@material-ui/core';
// Styles
import '../../../assets/styles/Home/Home.scss'
import { makeStyles } from '@material-ui/core/styles';

const ContentDrawer = () => {
    const useStyles = makeStyles((theme) => ({
        active: {
            marginLeft: "2em",
            fontSize: "1.2em",
            borderBottom: "1px solid"
        }
    }))
    const classes = useStyles();
    return (
        <div>
            <List component='nav'>
                <ListItem component={NavLink} to='/quienes-somos'>
                    <ListItemText class="nav-links" activeClassName={classes.active} primary='Quienes Somos' />
                </ListItem>
                <ListItem component={NavLink} to='/que-hacemos'>
                    <ListItemText class="nav-links" activeClassName="active" primary='Que Hacemos' />
                </ListItem>
            </List>
        </div>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default ContentDrawer