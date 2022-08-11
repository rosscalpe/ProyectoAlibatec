window.addEventListener('load', ()=>{

    const form = document.getElementById('form');
    
    form.addEventListener('submit', (e) =>{
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const expresiones ={
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }
        let errores = [];

        if(nombre.value === null || nombre.value === ""){
            errores.push('Debe ingresar un nombre');
            nombre.classList.add('is-invalid')
        } else {
            nombre.classList.add('is-valid')
            nombre.classList.remove('is-invalid')
        }
        if(email.value === null || email.value === "") {
            errores.push('Debe insertar un email')
            email.classList.add('is-invalid')
        } else if(!expresiones.email.test(email.value)) {
                errores.push('Debe introducir un email válido.')
                email.classList.add('is-invalid')
        } else{
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }

        if(errores.length > 0){
            e.preventDefault();
            let error = document.getElementById('error');
            error.innerHTML = ''
            for(let i = 0; i < errores.length; i++){
                    error.innerHTML += `<li > ${errores[i]} </li>`
                    error.style.color = 'red'
                    error.style.fontWeight = 'bold'
            }
        }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
        
                Toast.fire({
                icon: 'success',
                title: 'Se han enviado los datos satisfactoriamente'
                })
        }
        redirect();
    })
})