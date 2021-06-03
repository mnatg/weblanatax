import React from 'react';
import {
    List, ListItem, ListItemText
} from '@material-ui/core';
// Styles
import '../../../assets/styles/Home/Home.scss'

const ContentDrawer = () => {

    return (
        <div>
            <List component='nav'>
                <ListItemLink href='/quienes-somos'>
                    <ListItemText class="nav-links" primary='Quienes Somos' />
                </ListItemLink>
                <ListItemLink href='/que-hacemos'>
                    <ListItemText primary='Que Hacemos' />
                </ListItemLink>
            </List>
        </div>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default ContentDrawer