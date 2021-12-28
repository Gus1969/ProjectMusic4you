import React from "react";
import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import canciones from "../canciones";
import NavFile from "../common/NavFile";
import Footer from "../common/Footer";
import "../pages/Songs.css";
import InputSearch from "./InputSearch";

const Songs = () => {


  return (
    <>
      <NavFile />
      <InputSearch/>
      <div className="grid">
        {canciones.map((tema, i) => {
          return (
            <Card className="card" key={i}>
              <Card.Header className="card-image">
                <Image className="img" src={tema.icono} variant="top" alt="" />
              </Card.Header>

              <Card.Body>
                <Card.Title>
                  <h3>{tema.nombre}</h3>
                </Card.Title>
                <Card.Text>
                  <h2>{tema.artista}</h2>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <audio className="audio" controls src={tema.ruta}></audio>
                <h6 className="text-center">
                  Reproducciones:{tema.reproducciones}
                </h6>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
      
      <Footer />
    </>
  );
};

export default Songs;
