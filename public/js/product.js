window.addEventListener ("load", function(){

    let form = document.querySelector (".create-form");
    let nombreDelProducto = document.querySelector ("#nombreDelProducto");
    let descripcion = document.querySelector("#descripcion");
    let precio = document.querySelector("#precio")
    let color = document.querySelector("#color");
    let imagen = document.querySelector("#imagen");
    
    let erroresNombreDelProducto = document.querySelector ("div .erroresNombreDelProducto");
    let erroresDescripcion = document.querySelector("div .erroresDescripcion");
    let erroresPrecio = document.querySelector ("div .erroresPrecio");
    let erroresColor = document.querySelector("div .erroresColor");
    let erroresTalla = document.querySelector("div .erroresTalla");
    let erroresCategoria = document.querySelector("div .erroresCategoria")
    let erroresTipo = document.querySelector("div .erroresTipo");
    let erroresImagen = document.querySelector("div .erroresImagen")

    form.addEventListener("submit", function(e){ 
        e.preventDefault()
    let errorsNameProduct = []; 
    let errorsDescription = [];
    let errorsPrice = [];
    let errorsColor= [];
    let errorsSize = [];
    let errorsCategory = [];
    let errorsType = [];
    let errorsImage = [];
    
    console.log(talla.value)
    if(nombreDelProducto.value == ""){
        errorsNameProduct.push('Escribe el nombre del producto')

    }else if(nombreDelProducto.value.length < 5){
        errorsNameProduct.push("Debe contener al menos cinco caracteres")
    }
    
    if (errorsNameProduct.length > 0  ){
        errorsNameProduct.forEach(error => {
            erroresNombreDelProducto.innerHTML = "<p> <small>" + error + "</small> </p>" 
        });       
    
    }else{
        erroresNombreDelProducto.innerHTML = "" 
    }
    
    if(descripcion.value == ""){
        errorsDescription.push('Escribe una descripción del producto')
    }else if(descripcion.value.length < 20){
        errorsDescription.push("Debe contener al menos veinte caracteres")
    }
    
    if (errorsDescription.length > 0  ){

        errorsDescription.forEach(error => {
            erroresDescripcion.innerHTML = "<p> <small>" + error + "</small> </p>" 
        }); 
    }else{
        erroresDescripcion.innerHTML = "" 
    }
        
    let validarPrecio = new RegExp("^(?=.[0-9])");
    let validacionPrecio = validarPrecio.test(precio.value);
    
    if(precio.value == ""){
    errorsPrice.push('Escribe el precio final del producto')
    
    }

    else if (validacionPrecio == false) {
        errorsPrice.push("Debes ser un número entero superior a 0")
        
    }
     
    if (errorsPrice.length > 0  ){
        
            errorsPrice.forEach(error => {
                erroresPrecio.innerHTML = "<p> <small>" + error + "</small> </p>" 
            });
           
        }else{
            erroresPrecio.innerHTML =  ""; 
        }
    
    if(color.value== ""){
    errorsColor.push("Escribe un color")
    
    }
     
    if (errorsColor.length > 0  ){

            errorsColor.forEach(error => {
                erroresColor.innerHTML = "<p> <small>" + error + "</small> </p>" 
            }); 
        
               
           
        }else{
            erroresColor.innerHTML = ""
        }
        
        
        if(!document.querySelector('input[name="talla"]:checked')) {
            errorsSize.push('Elige al menos una talla');
            
            }
            if (errorsSize.length > 0){
            errorsSize.forEach(error =>{
                erroresTalla.innerHTML ="<p> <small>" + error + "</small> </p>"
        
            })
        }else{
            erroresTalla.innerHTML ="" 
        }

        if(!document.querySelector('input[name="categoria"]:checked')) {
            errorsCategory.push('Elige una categoría');
            }
            if (errorsCategory.length > 0){
            errorsCategory.forEach(error =>{
                erroresCategoria.innerHTML ="<p> <small>" + error + "</small> </p>"
        
            })
        }else{
            erroresCategoria.innerHTML ="" 
        }

        if(!document.querySelector('input[name="tipo"]:checked')) {
            errorsType.push('Elige un tipo de producto');
            }
            if (errorsType.length > 0){
            errorsType.forEach(error =>{
                erroresTipo.innerHTML ="<p> <small>" + error + "</small> </p>"
        
            })
        }else{
            erroresTipo.innerHTML ="" 
        }
        
            let filePath = imagen.value;
            let allowedExtensions = /(.jpg|.png|.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                errorsImage.push('El formato permitido de imágenes es .jpg/.png/.gif ');
            }
            if (errorsImage.length > 0){
                errorsImage.forEach(error =>{
                    erroresImagen.innerHTML ="<p> <small>" + error + "</small> </p>"
            
                })
            }else{
                erroresImagen.innerHTML ="" 
            }
    
            if(errorsNameProduct.length == 0 && errorsDescription.length == 0 && errorsPrice.length == 0 && errorsColor.length == 0 && errorsSize.length == 0 && errorsCategory.length == 0 && errorsType.length == 0 && errorsImage.length == 0){
                form.submit()
            }
            

    
    
    })
    
    })