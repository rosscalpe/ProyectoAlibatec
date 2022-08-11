const formularioCompra = document.querySelector('form')
let errores = []
  formularioCompra.addEventListener('submit', (e)=> {

    const inputCompra = document.querySelectorAll('.grande');

    inputCompra.forEach((input)=> {
        if(input.value == 'undefined' || input.value == ''){
            errores.push(input.name)
        }
    } )
    if(errores.length > 0){
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Por favor completa los campos',
            showConfirmButton: false,
            timer: 2000
        })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con exito',
            showConfirmButton: false,
            timer: 2000
        })
        formularioCompra.submit();
        localStorage.clear();
        location.reload();
        location.href = '/'
    }
    // if(errores.length){
    //     e.preventDefault();
    //     let errors = document.querySelector('.errors')
    //     errors.innerHTML=''
    //     errores.forEach(err => {
    //         errors.innerHTML= `<p> ${err} </p>`
    //         errors.style.color = 'red'
    //     })
    // }else{
    //     alert('Su compra se ha realizado satisfactoriamente, le enviaremos el detalle de la compra a su correo')
    //     localStorage.clear();
    //     location.reload();
    //     location.href = '/'
    //     formularioCompra.submit();
    // }
})