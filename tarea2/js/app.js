"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensajeEnvio");
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    evento.preventDefault();
});
/*
document.addEventListener("DOMContentLoaded", function() {
    formulario.addEventListener("submit", validarFormulario);
    formulario.style.display="none";
    mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
});


function validarFormulario(this: any, evento: any){
    evento.preventDefault();
    let texto:any=document.getElementById("texto");
    if( texto.value.leght == "" ){
        alert("no se ha escrito descripcion");
        return;
    }
    this.submit();
}*/
function limpiarForm() {
    formulario.reset();
}
function validar() {
    var ok = 0;
    var ckbox = document.getElementsByName("opcion[]");
    for (var i = 0; i < ckbox.length; i++) {
        if (ckbox[i].checked == true) {
            ok = 1;
        }
    }
    if (ok == 0) {
        alert("seleccione al menos un lenguaje de programacion");
        return false;
    }
}
