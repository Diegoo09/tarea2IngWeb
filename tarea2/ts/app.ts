
let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensajeEnvio");

formulario.addEventListener("submit",function(evento: { preventDefault: () => void; }){
    formulario.style.display="none";
    mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    evento.preventDefault();
});

function limpiarForm(){
    formulario.reset();
}

function validar(){
    var ok = 0;
    var ckbox = document.getElementsByName("opcion[]");
    for (var i=0; i < ckbox.length; i++){
        if(ckbox[i].checked == true){
        ok = 1;
        }
    }
    if(ok == 0){
    alert("seleccione al menos un lenguaje de programacion");
    return false;
    }
}