import React from 'react';
import { Link } from 'react-router-dom';
import {
    List, ListItem, ListItemText
} from '@material-ui/core';
// Styles
import '../../../assets/styles/Home/Home.scss'

const ContentDrawer = () => {

    return (
        <div>
            <List component='nav'>
                <ListItem component={Link} to='/quienes-somos'>
                    <ListItemText class="nav-links" primary='Quienes Somos' />
                </ListItem>
                <ListItem component={Link} to='/que-hacemos'>
                    <ListItemText primary='Que Hacemos' />
                </ListItem>
            </List>
        </div>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default ContentDrawer