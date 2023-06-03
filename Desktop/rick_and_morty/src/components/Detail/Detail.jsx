import axios from "axios" ;
import { useParams } from "react-router-dom" ;
import React, { useState, useEffect } from "react";
import styles from "./Details.module.css"
// import React, {useEffect, useState} from "react";

 const Detail = ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); 

    return(
      //   <div>
            
      //           {/* <h1>{character?.name}</h1>
      //           <h2>{character?.status}</h2>
      //           <h2>{character?.species}</h2>
      //           <h2>{character?.gender}</h2>
      //           <h2>{character.origin?.name}</h2>
      //           <img src={character.image} alt= "chair detail"/>
      //   */}
      //   </div>
      <div className={styles.details}>
           <div className={styles.details2}>
           <h2> Estado: {character?.status}</h2>
           <h2>Especie: {character?.species}</h2>
           <h2>Género: {character?.gender}</h2>
           <h2>Orígen: {character.origin?.name}</h2>
           </div>
           <div>
           <img className= {styles.imagen} src={character.image} alt= "chair detail"/>
           </div>
         </div>
   
    )

}

export default Detail;