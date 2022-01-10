import React from 'react'
import { Container } from 'react-bootstrap';
import './InputSearch.css';
//import canciones from '../canciones';
import $ from "jquery"

const InputSearch = () => {
//const {searchSongs, setSearchSongs} = useState('');
$(document).ready(function(){
    $("#searcher").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#grid .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


    return ( 
        <Container className='contenedor'>
        <div className="form-group has-search">
    <span className="fa fa-search form-control-icon"></span>
    <input type="text" className="form-control" id='searcher' placeholder="Search"
     />
  </div>
  
      </Container>
    )

}

export default InputSearch;
