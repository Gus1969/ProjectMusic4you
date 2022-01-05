import React from 'react'
import { Container } from 'react-bootstrap';
import './InputSearch.css';
//import canciones from '../canciones';

const InputSearch = () => {
//const {searchSongs, setSearchSongs} = useState('');


    return ( 
        <Container className='contenedor'>
        <div className="form-group has-search">
    <span className="fa fa-search form-control-icon"></span>
    <input type="text" className="form-control" placeholder="Search" />
  </div>
      </Container>
    )

}

export default InputSearch;
