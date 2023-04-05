import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Detail from './components/Detail';
import About from './components/About';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let noRepeat = characters.find((character) => character.id === data.id);
            if (noRepeat) {
               alert('Character is already being displayed')
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters((oldChars) => {
         return oldChars.filter((character) => character.id !== id)
      })
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
