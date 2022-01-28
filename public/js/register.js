

window.addEventListener ("load", function(){

let form = document.querySelector (".create-form");
let nombre = document.querySelector (".nombre");
let apellido = document.querySelector(".apellido");
let email = document.querySelector("#reg_email")
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");


let erroresNombre = document.querySelector ("div .erroresNombre");
let erroresApellido = document.querySelector("div .erroresApellido");
let erroresEmail = document.querySelector ("div .erroresEmail");
let erroresContraseña = document.querySelector("div .erroresContraseña");
let erroresConfirmarContraseña = document.querySelector("div .erroresConfirmarContraseña");
let erroresSexo = document.querySelector("div .erroresSexo");

form.addEventListener("submit", function(e){ 
    e.preventDefault()
let errorsName = []; 
let errorsLastName = [];
let errorsEmail = [];
let errorsPassword = [];
let errorsConfirmPassword = [];
let erroresSex = [];



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

    // let validarContraseña = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])");
    //let validacionContraseña = validarContraseña.test(password.value);

    //console.log(validacionContraseña);

if(password.value== ""){
errorsPassword.push("Escribe tu contraseña")

}else if(password.value.length < 8){
    errorsPassword.push('La contraseña debe tener como minimo 8')
}


// else if (validacionContraseña == false) {
//     errorsPassword.push('La contraseña debe tener como mínimo 8 caractéres, incluídos 1 letra mayúscula, 1 minúscula y 1 caracter especial')
    
// }
 
if (errorsPassword.length > 0  ){
    
    
        errorsPassword.forEach(error => {
            erroresContraseña.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    
            
       
    }

    let contra = password.value
    let confirmcontra =confirmPassword.value
     
   if(contra != confirmcontra){
        errorsConfirmPassword.push('Las contraseñas no coinciden')
    }
    
    
    if (errorsConfirmPassword.length > 0  ){
    
        errorsConfirmPassword.forEach(error => {
            erroresConfirmarContraseña.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    
            
       
    }

    
    if(!document.querySelector('input[name="sexo"]:checked')) {
        erroresSex.push('Elige un sexo');
        
        }
        if (erroresSex.length > 0){
        erroresSex.forEach(error =>{
            erroresSexo.innerHTML ="<p> <small>" + error + "</small> </p>"
    
        })
    }


    
        // var fileInput = document.getElementById('file');
        // var filePath = fileInput.value;
        // var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        // if(!allowedExtensions.exec(filePath)){
        //     alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        //     fileInput.value = '';
        //     return false;
        // }

})

})