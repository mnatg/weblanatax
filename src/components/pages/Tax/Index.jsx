// React
import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

//util
import GetFileStorageUtil from '../../../utils/ListFirebaseFiles';

//MaterialUI
import { Button, Container, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';

import '../../../assets/styles/General/tax-detail.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '80%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
}));

const Index = () => {
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const userInfo = useSelector((state) => state.auth.user);
    console.log(userInfo);
    const [taxId, setTaxId] = useState('');
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        getFiles();
    }, [])

    const getFiles = async () => {
        let user = userInfo.uid;
        let file = await GetFileStorageUtil(user + "/" + "126");
        console.log("Files-object:[" + file + "]");
        setFiles(file);
    }

    const renderSwitch = (varName) => {
        switch (varName.substr(varName.lastIndexOf("."), varName.length - 1)) {
            case ".pdf":
                return <PictureAsPdfIcon style={{ color: red[500] }} />
            case ".png":
                return <ImageIcon style={{ color: green[500] }} />
            default:
                return <DescriptionIcon />
        }
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <> 
        <div className='space-taxes'></div>
        <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignItems="center" 
        >
            <Avatar></Avatar>
            <CssBaseline />
            <Container fixed maxWidth="sm" >
                {   files.length === 0 ? <CircularProgress color="primary" /> :
                    files.map((file, index) => {
                        return (
                            <div >
                                <Grid item xs={12} zeroMinWidth>
                                    <List key={index}>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header">
                                                <ListItem button>
                                                    {renderSwitch(file.name)}
                                                    <ListItemText primary={file.name} inputMultiline/><Typography>(24Mb)</Typography>
                                                </ListItem>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography >Fecha de creacion: 14/03/1990</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </List>
                                </Grid>
                            </div>)
                    })
                }

                <Paper square className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<PhoneIcon />} label="CONTACTAR CON ASESOR" />
                        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                        <Tab icon={<PersonPinIcon />} label="NEARBY" />
                    </Tabs>
                </Paper>
            </Container>
        </Grid>
        </>
    )
}

export default Index;