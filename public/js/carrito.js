
window.addEventListener ("load", function(){

   let button = document.querySelector(".buttonCarrito");
   let imagen = document.querySelector(".buzo").getAttribute("src");
   let nombreProducto = document.querySelector(" .nombreDelProducto").innerText;
   let precio = document.querySelector(".precio").innerText;
   //let talla = document.querySelector('input[name=talle]:checked').value

   let contador = 0;

   let producto = {
      idProducto:button.value,
      imagen,
      nombreProducto,
      precio,
      cantidad:contador
   };

   button.addEventListener("click",function(e){
      e.preventDefault()
    
   
    
    if(localStorage.carrito == null){
       let carrito =[];
       localStorage.setItem("carrito", JSON.stringify(carrito))
    
   }else{
      
      let carrito = JSON.parse(localStorage.carrito);
        let repetido = carrito.filter(function(producto){
         return producto.idProducto===button.value
           })
            if(repetido.length===0){
               carrito.push(producto)
               localStorage.setItem("carrito",JSON.stringify(carrito))
            }else{

              contador++
              
               

               
              carrito.forEach(element => {
                 if(element.idProducto==button.value){
                    element.idProducto=button.value,
                    element.imagen=producto.imagen,
                    element.nombreProducto=producto.nombreProducto,
                    element.precio=producto.precio,
                   element.cantidad=element.cantidad+contador
                  
                 }
               
              });
             
             
              localStorage.setItem("carrito",JSON.stringify(carrito))
             contador=0
              
              
              
            }
            //    localStorage.setItem("carrito",JSON.stringify(carrito))
       }
      
       console.log(localStorage.carrito)
          
          //console.log(localStorage.carrito)
      //  if(repetido.length===0){
      //     repetido.cantidad++
      //     //return
          
      //  }else{
      //     carrito.push(producto)
      //  }
        
     //}


    //console.log(localStorage.carrito)

  
   // carrito.push(e.target.value)
    //localStorage.setItem("carrito",JSON.stringify(carro))
   
    //console.log(localStorage.carrito)
   });
   


    

})