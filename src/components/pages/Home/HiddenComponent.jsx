import React from 'react';
import {withWidth, Typography, Hidden, Button} from '@material-ui/core';

const HiddenComponent = (props) => {
    return (
        <div>
            <Typography variant="h6" color='initial'>
            pantalla: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant='contained' color='primary'>
                    XS
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant='contained' color='primary'>
                    MD
                </Button>
            </Hidden>
        </div>
    )
}


export default withWidth()(HiddenComponent)
