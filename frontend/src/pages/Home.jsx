import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Carousel} from 'react-bootstrap';
import './Home.css';
import Duran from '../assets/IMG/Duran.png';
import lady from '../assets/IMG/lady.jpg';
import Queen from '../assets/IMG/queen.jpg';
import Rolling from '../assets/IMG/RS.png';
import NavFile from '../common/NavFile';
import Footer from '../common/Footer';




 const Home = () => {
     return (
       <>
       <NavFile />
      <Container>
        <Carousel fade className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Duran}
      alt="Duran Duran"
    />
    <Carousel.Caption>
      <h3>Duran Duran</h3>
      <p> "Thanks Music4You. It is great to be part of this community of music lovers"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lady}
      alt="Lady Gaga"
    />

    <Carousel.Caption>
      <h3 className="LG">Lady Gaga</h3>
      <p className="LGText">"The world is connected to the music industry in so many ways. This is a great platform"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Queen}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Queen</h3>
      <p>"Jump on to this marvelous site"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Rolling}
      alt="Duran Duran"
    />
    <Carousel.Caption>
      <h3> The Rolling Stones</h3>
      <p> "Fantastic display of music and talents in one page. Good job guys" </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
<Footer/>
</>

     )
 }
 export default Home; 
