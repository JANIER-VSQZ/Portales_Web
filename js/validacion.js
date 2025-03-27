const regexIsEmpty = /^\s*$/;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener('DOMContentLoaded', ()=>{
    const txtPrimerNombre = document.getElementById("txtPrimerNombre");
    const txtApellidoPaterno = document.getElementById("txtPrimerApellido");
    const formSolicitud = document.getElementById("formSolicitud");
    const txtCorreo = document.getElementById("txtCorreo");

    function onSubmit_formSolicitud (e){
        const error={};
        let hasErrors = false;
        if(regexIsEmpty.test(txtPrimerNombre.value)){
            alert("El nombre no puede ir vacio");
            hasErrors=true;
            error["txtPrimerNombreError"]="el nombre no puede ir vacio";
            e.preventDefault();
            e.stopPropagation();
        }
        if(regexIsEmpty.test(txtPrimerApellido.value)){
            alert("El nombre no puede ir vacio");
            hasErrors=true;
            error["txtPrimerNombreError"]="el nombre no puede ir vacio";
            e.preventDefault();
            e.stopPropagation();
        }

        if(!(regexCorreo.test(txtCorreo.value))){
            alert("Correo invalido");
            e.preventDefault();
            e.stopPropagation();
        }
        
    }

    formSolicitud.addEventListener("submit", onSubmit_formSolicitud);

})