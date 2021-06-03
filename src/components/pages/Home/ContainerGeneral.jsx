import React, { useState } from 'react';
import {
    Hidden,
    makeStyles,
    Toolbar
} from '@material-ui/core';
import Navbar from './Navbar';
import Drawer from './PanelDrawer';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
}))
const ContainerGeneral = (props) => {
    const [openState, setOpenState] = useState(false)
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setOpenState(!openState);
    };

    return (
        <div className={classes.root}>
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <Hidden smUp>
                <Drawer
                    variant='temporary'
                    open={openState}
                    onClose={handleDrawerToggle} />
            </Hidden>
            <div id="back-to-top-anchor" className={classes.toolbar} ></div>
        </div>
    )
}

export default ContainerGeneral
