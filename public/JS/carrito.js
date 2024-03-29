window.onload = function () {

  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  ) {
    let div = document.querySelector(".sinProducto");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
  } else {
    carrito = JSON.parse(localStorage.carrito);
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      let div = document.querySelector(".detalle-compra");
      let contenido = `
      <div class="producto1">

          <img class="productos" src=${producto.imagen}>

          <div class="detalle">
              <h4>  ${producto.titulo}</h4>
              <h4>  ${producto.descuentoCar}%</h4>
              <h4> $ ${producto.precioCar}</h4>
          </div>
          <button class= "borraritem" type="button">
              <i onClick="borrarItem(${i})" class="fas fa-times"></i>
          </button>
  </div>
`
      div.innerHTML += contenido;
    }
    let totalCarrito = JSON.parse(localStorage.totalCarrito)
    
    let div2 = document.querySelector(".envio")
    let contenido2 = `
      <div class="compraPrecios"> 
            
            <h2>Total</h3>
  
            <h2>$ ${totalCarrito}</h3>
      </div>    
    `
    div2.innerHTML+= contenido2
  }
  let botonBorrar = document.querySelector("#botonBorrar");
  botonBorrar.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Has vaciado el carrito',
      showConfirmButton: false,
      timer: 4000
    })
    location.reload();
  });
let comprar = document.getElementById("botonEnviar");
let inputCompra = document.querySelectorAll('.grande');

comprar.addEventListener('click', (e)=> {
  if(typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"){
    e.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'No hay productos agregados',
      showConfirmButton: false,
      timer: 5000
    })  
}else if(inputCompra[0].value == "" || inputCompra[1].value == ""){
  e.preventDefault();
  Swal.fire({
    icon: 'error',
    title: 'No has llenado todos los campos del formulario',
    showConfirmButton: false,
    timer: 4000
  })
}else{
  e.preventDefault();
  Swal.fire({
    icon: 'success',
    title: 'Compra realizada con exito',
    text: 'En breve te contactaremos',
    showConfirmButton: false,
    timer: 6000
})
  localStorage.clear();
  location.reload();
  location.href = '/'
}
})
}
function borrarItem(id) {
  let carrito = JSON.parse(localStorage.carrito); 
  carrito.splice(id, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
  let totalCarrito = localStorage.totalCarrito;
  totalCarrito = totalCarrito - carrito[id].precioCar;
  localStorage.setItem("totalCarrito", totalCarrito);
}



