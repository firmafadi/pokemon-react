import logo from './logo.svg';
import './App.css';
import { Container, Row} from 'react-bootstrap';
import Header from './component/header';
import Page from './component/pagination';
import Card from './component/card';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [path, setPath] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  const [pokemons, setPokemons] = useState([]);
  const [MyPokemon, setMyPokemon] = useState([]);

  const getPokemon = () =>{
    fetch(path)
    .then(response => response.json())
    .then(response =>{
        setPokemons(response.results)
        setNextPage(response.next)
        setPrevPage(response.previous)
    })
  }
  
  useEffect(() => {
    getPokemon();
  }, []);

  const mystyle = {
    marginTop:"10%"
  }

  return (
    <div className="App">
      <Header/>
      <div className='container-fluid' style={mystyle}>
        <div className='row'>
          {pokemons.map((pokemon) => <Card name={pokemon.name} url={pokemon.url}/>)}
        </div>
      </div>
      <Page/>
    </div>
  );
}

export default App;
