window.addEventListener("load", function () {

    let form = document.querySelector(".contact-form")
    let nombre = document.querySelector(".name")
    let email = document.querySelector(".email")
    let subject = document.querySelector(".subject")
    let mensaje = document.querySelector(".message")

    let erroresNombre = document.querySelector(".erroresNombre")
    let erroresEmail = document.querySelector(".erroresEmail")
    let erroresMensaje = document.querySelector(".erroresMensaje")
    let erroresAsunto = document.querySelector(".erroresAsunto")

    form.addEventListener("submit", function (e) {
        e.preventDefault()

        let errorsName = [];
        let errorsEmail = [];
        // let errorsSubject = [];
        let errorsMessage = [];
        
          if(nombre.value == ""){
              errorsName.push('Escribe tu nombre')
         }
          if (errorsName.length > 0  ){
             errorsName.forEach(error => {
                 erroresNombre.innerHTML = "<p style='color:rgb(255,0,0)'> <small>" + error + "</small> </p>" 
             });       
            
         }else{
             erroresNombre.innerHTML = "" 
         }

          if(email.value == ""){
              errorsEmail.push('Escribe tu email')
          }
        if (errorsEmail.length > 0  ){
              errorsEmail.forEach(error => {
                  erroresEmail.innerHTML = "<p style='color:rgb(255,0,0)'> <small>" + error + "</small> </p>" 
             });       
            
         }else{
             erroresEmail.innerHTML = "" 
          }

        //  if(mensaje.value == ""){
        //     errorsSubject.push('Elige el asunto')
        //  }
        //  if (errorsSubject.length > 0  ){
        //      errorsSubject.forEach(error => {
        //          erroresAsunto.innerHTML = "<p> <small>" + error + "</small> </p>" 
        //      });       
            
        //  }else{
        //      erroresAsunto.innerHTML = "" 
        //  }

         if(mensaje.value == ""){
             errorsMessage.push('Escribe tu mensaje')
         }
         if (errorsMessage.length > 0  ){
             errorsMessage.forEach(error => {
                 erroresMensaje.innerHTML = "<p style='color:rgb(255,0,0)'> <small>" + error + "</small> </p>" 
             });       
            
         }else{
             erroresMensaje.innerHTML = "" 
         }

         if(errorsName.length == 0 && errorsEmail.length == 0 &&  errorsMessage.length == 0){

       
            Swal.fire({
                title: '¡Gracias por escribirnos!',
                html: "<h5 class='texto-swal'>Pronto nos pondremos en contacto contigo</h5>",
                icon: "success",
                background: "black",
                color: "white",
                allowEnterKey: "true",
                confirmButtonText: "Ok",
                confirmButtonColor: "white",
                buttonsStyling: "true",
                customClass: {
                    title: "titulo-swal",
                    actions: "boton-swal",
                    confirmButton: "boton-confirm",
                    icon: "boton-icono"
                }
            })
                .then(() => form.submit())
        
          }
       
        


})
})

