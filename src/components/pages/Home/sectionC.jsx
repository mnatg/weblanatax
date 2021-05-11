import React from 'react';
import '../../../assets/styles/Home/Home.scss';
import imageOne from '../../../assets/images/Home/sectionC/NoticeOne/image.png'
import imageTwo from '../../../assets/images/Home/sectionC/NoticeTwo/image.png'
import imageThree from '../../../assets/images/Home/sectionC/NoticeThree/image.png'
import { Link } from 'react-router-dom';
import CarouselDeprecate  from 'react-elastic-carousel'
import Carousel from 'react-multi-carousel';

function sectionC() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 960 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 960, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    }
  };

  const items = [
    {
      id: 1, boddy: <Link to='/' > <img src={imageOne} className="image-carousel" alt="imageOne" /></Link>,
      title: <p className='news-autor'> By <strong>Fernanda |</strong>  03 Marzo 2021</p>,
      subtitle: <p className='news-title news-one-title'> Lana Tax, Facil - Rapido <br /> y seguro</p>
    },
    {
      id: 2, boddy: <Link to='/' ><img className="image-carousel" src={imageTwo} alt="imageTwo" /></Link>,
      title: <p className='news-autor'> By <strong>Maria |</strong> 03 Enero 2021</p>,
      subtitle: <p className='news-title news-two-title'> Los mejores en la <br />comunidad latina  </p>
    },
    {
      id: 3, boddy: <Link to='/' ><img className="image-carousel" src={imageThree} alt="imageThree" /></Link>,
      title: <p className='news-autor'> By <strong>Alejandro |</strong> 03 Diciembre 2019</p>,
      subtitle: <p className='news-title news-one-title'> Muchas gracias por su <br />asesoria con mi caso</p>
    }
  ]
  return (
    <div className='homebackground'>
      <div className="title-carousel">
        <h1 className='Millones-nos-Respald'>Millones nos Respaldan</h1>
        <h2 className='nase-a-especialista'>Únase a especialistas en TAXES y obtenga estrategias probadas de impuestos por correo electrónico</h2>
      </div>
      <CarouselDeprecate  itemsToShow={3} className="carrusel">
        {items.map(item => <div key={item.id}>{item.boddy}{item.title}{item.subtitle}</div>)}
      </CarouselDeprecate >
      <CarouselDeprecate  itemsToShow={2} className="carruselTablet">
        {items.map(item => <div key={item.id}>{item.boddy}{item.title}{item.subtitle}</div>)}
      </CarouselDeprecate >
      <CarouselDeprecate  itemsToShow={1} className="carruselMovil">
        {items.map(item => <div key={item.id}>{item.boddy}{item.title}{item.subtitle}</div>)}
      </CarouselDeprecate >

      <Carousel className='carousel' arrows={false} showDots={true} responsive={responsive} >
        {items.map(item => <div key={item.id}>{item.boddy}{item.title}{item.subtitle}</div>)}
      </Carousel>
    </div>
  );
}


export default sectionC;
