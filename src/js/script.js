document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var siRadioButton = document.getElementById('si');
    var noRadioButton = document.getElementById('no');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (siRadioButton.checked) {
            alert('Ha elegido Sí.');
			showConfirmation();
        } else if (noRadioButton.checked) {
            alert('Ha elegido No. Lo que significa que lo ha cometido pero no quiere confesarlo.');
			showConfirmation();
        } else {
            alert('Por favor, selecciona una opción.');
            return; // Detener la ejecución si no se selecciona ninguna opción
        }

    });
});

function showConfirmation() {
    var confirmacion = window.confirm('¿Acepta que es usted inocente?');

    var mensaje = 'Se dirige a su casa un furgón policial.';
    alert(mensaje);

    // Redirigir a otra página independientemente de la respuesta
    if(confirmacion){
        window.location.href = 'tienda.html';
    }

}
