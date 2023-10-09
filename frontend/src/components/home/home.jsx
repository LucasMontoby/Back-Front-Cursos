import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import Image1 from '../../assets/img/carrouselhome/imagen1.jpg'
import Image2 from '../../assets/img/carrouselhome/imagen2.jpg'
import Image3 from '../../assets/img/carrouselhome/imagen3.jpg'
import Image4 from '../../assets/img/carrouselhome/imagen4.jpg'

function Home() {
  return (
    <div className='carrousel'>
      <div className='contenidoHome'>
        <div className='bienvenida'>
          <div className='imgBienvenida'>
          </div>
          <div className='textBienvenida'>
            <h1 className='titulo'>Bienvenid@ a <span style={{ color: '#0066CC'}} >Cursos</span></h1>
            <h5>¡Aprender un idioma nunca fue tan cómodo!</h5>
            <p className='texto mt-5'>La propuesta de InterLingua es muy sencilla: Aprendé idiomas dónde estés y cuándo más cómodo te resulte. Tenemos planes de estudio que se adaptan a necesidades y tiempos de aprendizaje específicos y te permitirán avanzar en el idioma que querés aprender al ritmo que vaya en harmonía con tus actividades.</p>
            <p>La flexibilidad horaria es lo que nos caracteriza.</p>
            <br />
            <h6>Lo importante para nosotros es que disfrutes el aprendizaje.</h6>
          </div>
        </div>
      </div>
      <div className='borderCarousel'>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
};
export default Home