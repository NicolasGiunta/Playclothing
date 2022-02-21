window.addEventListener("load", function(){

    // let imagenCarrito = document.querySelector ("#foto1");
    // let nombreProducto = document.querySelector(".nombreProducto")
    let descripcionCarrito = document.querySelector(".descripcion");
    let botonBorrar = document.querySelector(".fa-trash-alt");
    let cantidadPrecio = document.querySelector(".cantidad_precio");
    let cantidadTotal = document.querySelector(".cantidad_total");
    let precioTotal = document.querySelector("precio_total");
    let compraTotal = document.querySelector("finalizar-compra")
    
    let productoFinal =  JSON.parse (localStorage.carrito)
    let buttonMenos = document.querySelector("#menos")

    
  //localStorage.clear();
    productoFinal.forEach(element => {
       

        let div = document.querySelector(".vacio");
        let contenido = ` 
        <div class="producto1">
        <img
          id="foto1"
          src=${element.imagen}
          alt="remera"
        />

   
    
      <div class="product">
        <!-- <div class="informacion-producto"> -->
        <div class="foto_tacho">
          <h2 class="nombreProducto">${element.nombreProducto}</h2>
          <div class="tacho"><i id="tacho" class="fas fa-trash-alt"></i></div>
        </div>
        
        <div class="cantidad_precio">
          <div class="cantidad_total">

          <form>
          <button value=${element.idProducto} type="submit" id="menos" class="fas menos fa-minus"></button>
          </form>
          
              <p>${element.cantidad+1}</p>
            
          
          
          </div>
          <div class="precio_total">
            
          </div>
        </div>
      </div>
    </div>
   
    `
    div.innerHTML+=contenido

    });
   
  
    
    // `<div class="footer">
    // <div class="finalizar-compra">
    //   <div class="total">
    //     <h1 id="total-finalizar">TOTAL</h1>
    //     <p id="precio-finalizar">${}</p>
    //   </div>
    // </div>
    // <button class="button">Finalizar Compra</button>`;
})