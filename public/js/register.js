

window.addEventListener ("load", function(){

let form = document.querySelector (".create-form");
let nombre = document.querySelector (".nombre");
let apellido = document.querySelector(".apellido");
let email = document.querySelector("#reg_email")
let password = document.querySelector("#password");
let confirmpassword = document.querySelector(".confirmPassword");
let sexo = document.querySelector(".sexo");

let erroresNombre = document.querySelector ("div .erroresNombre");
let erroresApellido = document.querySelector("div .erroresApellido");
let erroresEmail = document.querySelector ("div .erroresEmail");
let erroresContraseña = document.querySelector("div .erroresContraseña");


form.addEventListener("submit", function(e){ 
    e.preventDefault()
let errorsName = []; 
let errorsLastName = [];
let errorsEmail = [];
let errorsPassword = [];



if(nombre.value == ""){
    errorsName.push('Escribe tu nombre')
   

}else if(nombre.value.length < 2){
    errorsName.push("Debe contener al menos dos caracteres")
}


if (errorsName.length > 0  ){
    

    
    errorsName.forEach(error => {
        erroresNombre.innerHTML = "<p> <small>" + error + "</small> </p>" 
    });       

    
}



if(apellido.value == ""){
    errorsLastName.push('Escribe tu apellido')
}else if(apellido.value.length < 2){
    errorsLastName.push("Debe contener al menos dos caracteres")
}


if (errorsLastName.length > 0  ){
    
    
    errorsLastName.forEach(error => {
        erroresApellido.innerHTML = "<p> <small>" + error + "</small> </p>" 
    }); 

   
}





let regex = /^([a-zA-Z0-9.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
let validacionEmail = regex.test(email.value)

if(email.value== ""){
errorsEmail.push("Escribe tu mail")

}


else if (validacionEmail == false) {
    errorsEmail.push("Debes ingresar un email válido")
    
}
 
if (errorsEmail.length > 0  ){
    
    
        errorsEmail.forEach(error => {
            erroresEmail.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    
            
       
    }

    //validar  contraseña

    let validarContraseña = /^(?=(?:.\d){2})(?=(?:.[A-Z]){2})(?=(?:.*[a-z]){2})\S{8,}$/;
    let validacionContraseña = validarContraseña.test(password.value)

if(password.value== ""){
errorsPassword.push("Escribe tu contraseña")

}


else if (validacionContraseña == false) {
    errorsPassword.push('La contraseña debe tener como mínimo 8 caractéres, incluídos 1 letra mayúscula, 1 minúscula y 1 caracter especial')
    
}
 
if (errorsPassword.length > 0  ){
    
    
        errorsPassword.forEach(error => {
            erroresContraseña.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    
            
       
    }

})

})