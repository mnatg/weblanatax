import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { Link, NavLink } from 'react-router-dom';
import ListTaxes from '../../../Services/Taxes/ListTaxes'
import { onAddTaxes } from '../../../Store/actions/Taxes'


const Taxes = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)
    const taxes = useSelector((state) => state.taxes.taxes)

    return (
        <Paper style={{ maxHeight: 200, overflow: 'auto', marginTop:'20%' }}>
            <List>
                {taxes && taxes.length > 0 ?
                    taxes.map((item) =>
                        //console.log('id the tax: ' )
                        <Link to={{
                            pathname:'/tax',
                            taxProps:{
                                 taxId:item.id
                            }
                        }}>
                            <ListItem button  >
                                <ListItemIcon>
                                    <ListItemIcon />
                                </ListItemIcon>
                                <ListItemText primary="texto de impuesto" />{item.id}
                            </ListItem>
                        </Link>
                    )
                    :
                    <TextField id="outlined-basic" label="No hay impuestos" variant="outlined" />
            }
            </List>
        </Paper>
    )
}
export default Taxes;