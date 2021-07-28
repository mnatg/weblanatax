// React
import React from 'react';
// Components
import {
  Grid,
  Box,
  Hidden,
  makeStyles,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
// Assets
import notice1 from '../../../assets/images/Home/sectionC/notice1.webp'
import notice2 from '../../../assets/images/Home/sectionC/notice2.webp'
import notice3 from '../../../assets/images/Home/sectionC/notice3.webp'

const notices = [{
    img: notice1,
    name: 'Fernanda',
    date: '03 Marzo 2021',
    title: 'Simple, rápido y seguro',
  }, {
    img: notice2,
    name: 'Pedro',
    date: '03 Enero 2021',
    title: 'Los mejores en la comunidad latina',
  }, {
    img: notice3,
    name: 'Alejandro',
    date: '03 Diciembre 2019',
    title: 'Brindando por más de 20 años la mejor experiencia',
  },
]

const NoticeRender = ({ img, name, date, title, classes, center }) => <Box >
    <img src={img} alt="" className={classes.img} />
    <p className={classes.info} >By <strong>{name} </strong>| {date}</p>
    <p className={classes.title} style={ center ? { color: '#d9e021' } : {} } >{title}</p>
  </Box>

const useStyles = makeStyles((theme) => ({
  container: {
    marginBlock: '2em',
  },
  headerTitle: {
    marginLeft: '4%',
    fontSize: '2.125em',
    color: '#009245',
    fontWeight: 'bold',
    fontFamily: 'PoppinsBold',
    marginTop: '0.5em',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  headerBody: {
    marginLeft: '4%',
    fontSize: '1em',
    color: '#a6a6a6',
    lineHeight: 1.63,
    marginBottom: '1em',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  img: {
    maxWidth: '100%'
  },
  info: {
    fontSize: '1em',
    lineHeight: 1.75,
    color: '#544837'
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    lineHeight: 1.42,
    color: '#a6a6a6'
  },
  noticeBox: {
    marginInline: 'auto',
    paddingInline: '10%',
  }
}))

const SectionC = () => {
  const classes = useStyles();
  return (
    <Grid continer item xs={12} className={classes.container} >
      <p className={classes.headerTitle} >Miles nos Respaldan</p>
      <p className={classes.headerBody} >Nuestros especialistas te ayudarán a obtener los mejores resultados</p>
      <Hidden smDown >
        <Carousel autoPlay={false} navButtonsAlwaysInvisible  animation='slide' indicatorIconButtonProps={{style: {color: '#efefef'}}} activeIndicatorIconButtonProps={{style: {color: '#009245'}}} > 
          <Grid item container xs={12} justify='space-around' >
            {notices.map((notice, index) => <Grid item xs={3} >
              <NoticeRender img={notice.img} name={notice.name} date={notice.date} title={notice.title} classes={classes} center={index == 1 ? true : false } />
            </Grid>)}
          </Grid>
        </Carousel>
      </Hidden>
      <Hidden mdUp >
        <Carousel autoPlay={false} navButtonsAlwaysInvisible  animation='slide' indicatorIconButtonProps={{style: {color: '#efefef'}}} activeIndicatorIconButtonProps={{style: {color: '#009245'}}} > 
          {notices.map((notice, index) => <Grid item xs={12} sm={8} className={classes.noticeBox} >
            <NoticeRender img={notice.img} name={notice.name} date={notice.date} title={notice.title} classes={classes} center={index == 1 ? true : false } />
          </Grid>)}
        </Carousel>
      </Hidden>
    </Grid>
  );
}


export default SectionC;
