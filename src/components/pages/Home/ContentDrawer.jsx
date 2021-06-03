import React from 'react';
import {
    List, ListItem, ListItemText
} from '@material-ui/core';

const ContentDrawer = () => {

    return (
        <div>
            <List component='nav'>
                <ListItemLink href='/quienes-somos'>
                    <ListItemText primary='QUIENES SOMOS' />
                </ListItemLink>
                <ListItemLink href='/que-hacemos'>
                    <ListItemText primary='QUE SOMOS' />
                </ListItemLink>
            </List>
        </div>
    )
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default ContentDrawer