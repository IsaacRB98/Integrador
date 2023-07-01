import React from "react";
import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ROUTES } from "../Helpers/Routespaths";

const Nav = (props) =>{

    const {onSearch} = props;

   

    return(
        <div>
            <div className='hender'>Rick and Morty</div>
            <div className={styles.searchBar}>
            <Link to={ROUTES.ABOUT} ><button>ABOUT</button></Link>
            <Link to={ROUTES.HOME} ><button>HOME</button></Link>
            <Link to='/Favorite/' ><button>Favorite</button></Link>
            <Link to='/'><button >LogOut</button></Link>
        <SearchBar onSearch={onSearch}/>
        </div>
        </div>
    )
}

export default Nav