import styles from './Cards.module.css'

import Card from '../Card/Card';

export default function Cards(props) {
    const { characters, onClose } = props;
    
   return (
   <div className={styles.container}>
      {characters.map((char) => {
         return (
            <Card
            key ={char.id}
            id = {char.id}
            name= {char.name}
            status= {char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
            />
            )
         })}
      </div>
   )
}
