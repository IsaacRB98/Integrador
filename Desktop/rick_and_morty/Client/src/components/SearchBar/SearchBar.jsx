import styles from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState('')

   const handleChange = (e) => {
      setId(e.target.value);
   }

   const {onSearch}= props;
   return (
      <div className={styles.barracompleta}>
          <input className ={styles.fondo} type='search' onChange={handleChange} value={id}/>
         <button className = {styles.boton} onClick={() => {onSearch(id)}}>Agregar</button> 
      </div>
   );
}
