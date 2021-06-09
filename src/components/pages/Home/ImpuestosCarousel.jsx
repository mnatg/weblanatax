import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageOne from '../../../assets/images/Home/sectionC/NoticeOne/image.png'
import imageTwo from '../../../assets/images/Home/sectionC/NoticeTwo/image.png'
import imageThree from '../../../assets/images/Home/sectionC/NoticeThree/image.png'
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

function sectionC() {
  
  const items = [
    {
      id: 1, boddy: <p></p>,
      title: <p className='impuestos'>IMPUESTOS</p>,
      subtitle: <p></p>
    },
    {
      id: 2, boddy: <p></p>,
      title: <p className='impuestos'>AUDITORÍAS</p>,
      subtitle: <p></p>
    }
  ]
  return (
    <div className='homebackground'>
      <Carousel  autoPlay={true} navButtonsAlwaysInvisible animation='slide' indicatorIconButtonProps={{style: {color: '#efefef'}}} activeIndicatorIconButtonProps={{style: {color: '#009245'}}} > 
        {items.map(item => <div key={item.id} className='itemCarousel' >{item.boddy}{item.title}{item.subtitle}</div>)}
      </Carousel>
    </div>
  );
}


export default sectionC;
