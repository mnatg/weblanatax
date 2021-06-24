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
      id: 1, boddy: <Link to='/' > <img src={imageOne} className="image-carousel" alt="imageOne" /></Link>,
      title: <p className='news-autor'> By <strong>Fernanda |</strong>  03 Marzo 2021</p>,
      subtitle: <p className='news-title news-one-title'>Simple, rápido y seguro<br /> y seguro</p>
    },
    {
      id: 2, boddy: <Link to='/' ><img className="image-carousel" src={imageTwo} alt="imageTwo" /></Link>,
      title: <p className='news-autor'> By <strong>Pedro |</strong> 03 Enero 2021</p>,
      subtitle: <p className='news-title news-two-title'> Los mejores en la <br />comunidad latina  </p>
    },
    {
      id: 3, boddy: <Link to='/' ><img className="image-carousel" src={imageThree} alt="imageThree" /></Link>,
      title: <p className='news-autor'> By <strong>Alejandro |</strong> 03 Diciembre 2019</p>,
      subtitle: <p className='news-title news-one-title'>Brindando por más de 20<br /> años la mejor experiencia</p>
    }
  ]
  return (
    <div className='homebackground'>
      <div className="title-carousel">
        <h1 className='Millones-nos-Respald'>Miles nos Respaldan</h1>
        <h2 className='nase-a-especialista'>Nuestros especialistas te ayudarán a obtener los mejores resultados</h2>
      </div>
      <Carousel className='carrusel' autoPlay={false} navButtonsAlwaysInvisible animation='slide' > 
        <div className='destockItems' >
          {items.map(item => <div key={item.id}>{item.boddy}{item.title}{item.subtitle}</div>)}
        </div>
      </Carousel>
      <Carousel className='carruselMovil' autoPlay={false} navButtonsAlwaysInvisible  animation='slide' indicatorIconButtonProps={{style: {color: '#efefef'}}} activeIndicatorIconButtonProps={{style: {color: '#009245'}}} > 
        {items.map(item => <div key={item.id} className='itemCarousel' >{item.boddy}{item.title}{item.subtitle}</div>)}
      </Carousel>
    </div>
  );
}


export default sectionC;
