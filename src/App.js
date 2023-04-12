import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Detail from './components/Detail';
import About from './components/About';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'happy_user@gmail.com';
   const PASSWORD = '@Model101';

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   function logout() {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {location.pathname === '/' ? null : <Nav logout={logout} onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Login login={login}/>}></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
