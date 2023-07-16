//React and helpers
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from './components/Helpers/Routespaths';
import { useEffect } from 'react';
import React from 'react';

//Components
// import Card from './components/Card/Card.jsx'; no me acuerdo porque la comente
 import Cards from './components/Cards/Cards.jsx';
 // // import SearchBar from './components/SearchBar/SearchBar.jsx'; no me acuerdo porque la comente
 import Form from './components/Form/Form'
 import Nav from './components/Nav/Nav';
 import About from './components/About/About';
 import Detail from './components/Detail/Detail'; 
 import Favorite from './components/Favorite/Favorite'; 

// import Form from '../components/Form/Form';
// import Nav from '../components/Nav/Nav';
// import About from '../components/About/About';
// import Detail from '../components/Detail/Detail';
// import Favorite from '../components/Favorite/Favorite'



function App() {

  const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id);
      }))

  }

   const [characters, setCharacters] = useState([])
   
   const {pathname} = useLocation();

//VERSION ASYNC AWAIT
const onSearch = async (id)=>{
   try{
      const { data }= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
         //setCharacters((oldChars) => [...oldChars, data]);
         setCharacters([...characters, data]);
      } /*else {
         window.alert('¡No hay personajes con este ID!');
      }*/

   } catch(error){
      // window.alert(error.message)
      console.log(error)
   }

}

   //Version Promesas
  /* const  onSearch = (id)=> {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }*/

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   // const EMAIL = 'ejemplo@gmail.com';
   // const PASSWORD = '1Password';
   //ANTES DE EXPRESS
  /* function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }*/
   
//DESPUES DE EXPRESS

//VERSION ASYNC AWAIT
 async function login (userData){
   
   try {
   const URL = 'http://localhost:3001/rickandmorty/login/';
   const { email, password } = userData;
   // const { data } = await axios(`${URL}?email=${email}&password=${password}`);
   const { data } = await axios(URL + `?email=${email}&password=${password}`)
   const {access} = data;
      setAccess(data)
      access && navigate('/home')
} catch (error) {
   console.log(error)
}

}



//Version promesas
/*const login = (userData)=>{
   const URL = 'http://localhost:3001/rickandmorty/login/';
   const { email, password } = userData;
   axios(`${URL}?email=${email}&password=${password}`).then(({data})=>{
      const {access} = data;
      setAccess(access)
      access && navigate('/home')
   })
}*/
 


   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         
        { pathname !== '/' && <Nav  onSearch={onSearch}/> }
         <Routes>
            <Route path= {'/'} element={<Form  login = {login}/>}></Route>
            <Route path={ROUTES.ABOUT} element={<About/>} ></Route>
            <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>} ></Route>
            <Route path='/Favorite' element= {<Favorite/>} ></Route>
            <Route path='/Detail/:id' element= {<Detail/>} ></Route>
         </Routes>
        
         
        
      </div>
   );
}


export default App; 
