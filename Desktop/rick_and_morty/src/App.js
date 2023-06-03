//React and helpers
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from './components/Helpers/Routespaths';
import { useEffect } from 'react';
import React from 'react';

//Components
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'; 
import Favorite from './components/Favorite/Favorite'; 

function App() {

  const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }))

  }

   const [characters, setCharacters] = useState([])
   
   const {pathname} = useLocation();

   const  onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '1Password';
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   function logOut(){
      setAccess(false);
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         
        { pathname !== '/' && <Nav  onSearch={onSearch}/> }
         <Routes>
            <Route path= {'/'} element={<Form  logOut = {logOut }login = {login}/>}></Route>
            <Route path={ROUTES.ABOUT} element={<About/>} ></Route>
            <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>} ></Route>
            <Route path='/Favorite' element= {<Favorite/>} ></Route>
            <Route path='/Detail/:id' element= {<Detail/>} ></Route>
         </Routes>
        
         
        
      </div>
   );
}


export default App; 
