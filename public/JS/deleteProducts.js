let form = document.getElementById("form-delete");
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
                'El producto ha sido borrado',
                'success'
            )
            form.submit();
        }
    })
})