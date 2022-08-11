let form = document.getElementById("form-deleteU");
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    Swal.fire({
        title: '¿Estas seguro?',
        text: "No podras revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo!'
        }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Borrado!',
                'Se ha eliminado el perfil',
                'success'
            )
            form.submit();
        }
    })
})