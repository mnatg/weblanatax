import { Divider, Drawer, makeStyles } from '@material-ui/core';
import React from 'react'
import ContentDrawer from './ContentDrawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper:{
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}))

const PanelDrawer = (props) => {
    const classes = useStyles()
    return (
        <Drawer className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor='left'
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose: null}
        >
        <div className={classes.toolbar}>
        </div>
        <Divider />
        <ContentDrawer onClose={props.onClose} />
        </Drawer>
    )
}

export default PanelDrawer
