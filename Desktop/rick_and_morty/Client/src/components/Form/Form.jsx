import React, { useState } from "react";
import styles from "./Form.module.css";
import validator from "./validation";


 function Form(props){
    const {login}= props;
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) =>{
    setErrors(validator({...userData, [event.target.name]: event.target.value}))    
    setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)

    }

   

    const [errors, setErrors]= useState({})
return(
<div>
<form className={styles.form}onSubmit={handleSubmit}>
 <div>
    <label className={styles.label}>Email  </label>
    <input className={styles.input} type="text" value={userData.email} name="email" onChange={handleChange}></input>
    {errors.email1 ? (<p>{errors.email1}</p>
    ) : errors.email2 ? (<p>{errors.email2}</p>
    ) : (<p>{errors.email3}</p>)}
</div>
<div>
    <label className={styles.label}>Password   </label>
<   input className={styles.input}type="text" value={userData.password} name="password" onChange={handleChange}></input>
{errors.p1 ? (<p>{errors.p1}</p>
    ) : (<p>{errors.p2}</p>) }
</div>
<button className={styles.boton} type="submit">Submit</button>


    
</form>
</div>
)
}
export default Form;