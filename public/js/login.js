window.addEventListener ("load", function(){
    
let form = document.querySelector (".create-form");
let email = document.querySelector("#email")
let password = document.querySelector("#password");


let erroresEmail = document.querySelector ("div .erroresEmail");
let erroresContraseña = document.querySelector("div .erroresContraseña");

form.addEventListener("submit", function(e){ 
    e.preventDefault()

let errorsEmail = [];
let errorsPassword = [];

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
    
            
       
    }else{
        erroresEmail.innerHTML = "" 
    }

if(password.value== ""){
errorsPassword.push("Escribe tu contraseña")

}
if (errorsPassword.length > 0  ){
    
    
        errorsPassword.forEach(error => {
            erroresContraseña.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    }else{
        erroresContraseña.innerHTML = "" 
    }

    if(errorsEmail.length == 0 && errorsPassword.length == 0){
        form.submit()
    }

})

    })
