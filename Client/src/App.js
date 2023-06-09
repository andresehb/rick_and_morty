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
import Favorites from './components/Favorites';

function App() {
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const login = (inputs) => {
      axios.get(`http:localhost:3001/rickandmorty/login?email=${inputs.email}&password=${inputs.password}`)
      .then(({ data }) => {
         if (data.access) {
            setAccess(data.access)
            navigate('/home')
            return alert('Logged in')
         }
      })
   }
   const logout = () => {
      axios.get(`http:localhost:3001/rickandmorty/login?email=1234&password=1234`)
      .then(({ data }) => {
         if (!data.access) {
            setAccess(data.access)
            navigate('/')
         }
      })
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            let noRepeat = characters.find((character) => character.id === data.id);
            if (noRepeat) {
               alert('Character is already being displayed')
            } else {
               setCharacters((prevChars) => [...prevChars, data])
            }
         } else {
            window.alert('¡No hay personajes con este ID!')
         }
      });
   }

   const onClose = (id) => {
      setCharacters((prevChars) => {
         return prevChars.filter((character) => character.id !== id)
      })
   }

   return (
      <div className='App'>
         {location.pathname === '/' ? null : <Nav logout={logout} onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Login login={login}/>}></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
