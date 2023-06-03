const validator = (data)=>{
let errors = {};
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

if(!regexEmail.test(data.email)){
    errors.email1= 'Debe ser un correo electrónico'
    }

if(!data.email){
    errors.email2= 'Nombre de usuario no puede estar vacío'
}
if(data.email.length > 35){
    errors.email3= 'No puede tener mas de 35 caracteres'
}
if(!/.*\d+.*/.test(data.password)){
errors.p1= 'Al menos debe contener un número'
}
if(data.password.lenght < 6 || data.password.lenght> 10){
errors.p2 = 'Debe contener entre 6 y 10 caracteres'
}

return errors
}

export default validator;