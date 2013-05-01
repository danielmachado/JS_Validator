
function validar() {
    var nombre = formulario.nombre.value;
    if (nombre == ''||nombre==' ') {
        alert("Falta el nombre");
    }
    var apellido = formulario.apellidos.value;
    if (apellido == '' || apellido == ' ') {
        alert("Falta el apellido");
    }
    var email = formulario.email.value;
    if (email == '' || email == ' ') {
        alert("Falta el email");
    }
    var reg = /^\w+@\w+.\w+$/; 
    if(email.search(reg)==-1){
        alert("Email mal formado");
    }
    var telefono = formulario.telefono.value;
    if(telefono == ''){
        alert("Falta telefono");
    }
    var regTel = /\d{9}/;
    if(telefono.search(regTel) == -1){
        alert("Telefono incorrecto, 9 digitos")
    }
    var direccion = formulario.direccion.value;
    if(direccion == ''){
        alert("Falta la dirección");
    }
    var fecha = formulario.fecha.value;
    if (fecha == '') {
        alert("Falta la fecha de nacimiento");
    }
    var regFecha = /\d{4}-\d{2}-\d{2}/;
    if(fecha.search(regFecha) == -1){
        alert('Fecha mal construida, AAAA-MM-DD');
    }
    var dni = formulario.dni.value;
    if(dni == ''){
        alert('Falta el DNI');
    }
    var regDni = /\d{7,8}[A-Z]/;
    if(dni.search(regDni) == -1){
        alert("DNI mal formado");
    }

}

function valForm () {
    this.validar = validar;
}