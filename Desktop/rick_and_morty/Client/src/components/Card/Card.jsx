import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import React, {useState, useEffect} from 'react';

export  function Card(props) {
   const {id, name,/*{ status, species, gender, origin,}*/ image, onClose, addFav, removeFav, myFavorites } = props;

   const [isFav, setIsFav]= useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


  const handleFavorite=()=>{
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav)
   }

   return (
      <div className ={styles.card}>
         <img className={styles.contain}src={image} alt='' /> 
         <div className={styles.contenedor}>
            <Link to={`/detail/${id}`}>
          <h1>{name}</h1>
            </Link>
           {/* <div className={styles.details}>
           <h2> Estado: {status}</h2>
           <h2>Especie: {species}</h2>
           <h2>Género: {gender}</h2>
           <h2>Orígen: {origin}</h2>
         </div> */}
      </div>
         {
         isFav ? (
         <button  onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={() =>{onClose(id)}}>X</button>
      </div>
   );
}

export function mapDispatchToProps (dispatch){
return{
   addFav:(character)=> {dispatch(addFav(character))},
   removeFav: (id)=>{dispatch(removeFav(id))}

}
}

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   };
 };
 
export default connect(mapStateToProps,mapDispatchToProps)(Card);