import React from 'react';
import '../../../assets/styles/Home/Home.css';
import imageOne from '../../../assets/images/Home/sectionC/NoticeOne/image.png'
import imageTwo from '../../../assets/images/Home/sectionC/NoticeTwo/image.png'
import imageThree from '../../../assets/images/Home/sectionC/NoticeThree/image.png'






import { Link } from 'react-router-dom';

function sectionC() {
  return (
    <div className='homebackground'>
       
    <h1 className='Millones-nos-Respald'>Millones nos Respaldan</h1>
    <h2 className='nase-a-especialista'>Únase a especialistas en TAXES y obtenga estrategias probadas de impuestos por correo electrónico</h2>  

    <div className='columnas-sectionNoticias '> 
    
      <div>
      <Link to='/' >
          <img className="noticias-image-one" src={imageOne} alt="imageOne"/>
          </Link>
          <h1 className='noticia-one-autor'> By Fernanda |  03 Marzo 2021</h1>
          <h2 className='noticia-one-title'> Lana Tax, Facil - Rapido <br/> y seguro</h2>

      </div>

      <div>

      <Link to='/' >
          <img className="noticias-image-one" src={imageTwo} alt="imageTwo"/>
          </Link>
          <h1 className='noticia-one-autor'> By Maria | 03 Enero 2021</h1>
          <h2 className='noticia-two-title'> Los mejores en la <br/>comunidad latina  </h2>

      </div>

      <div>

      <Link to='/' >
          <img className="noticias-image-one" src={imageThree} alt="imageThree"/>
          </Link>
          <h1 className='noticia-three-autor'> By Alejandro | 03 Diciembre 2019</h1>
        
          <h2 className='noticia-one-title'> Muchas gracias por su <br/>asesoria con mi caso</h2>

      </div>



      </div>



    </div>
  );
}

export default sectionC;
