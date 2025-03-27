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
        txtPrimerNombre.classList.remove('error');
        txtApellidoPaterno.classList.remove('error');
        txtCorreo.classList.remove('error');

        const errorContainers = document.querySelectorAll('[id^="div"]');
        errorContainers.forEach(container => {
            const existingErrorMessage = container.querySelector(".error");
            if (existingErrorMessage) {
                container.removeChild(existingErrorMessage);
            }
        });




        if(regexIsEmpty.test(txtPrimerNombre.value)){
            hasErrors=true;
            error["PrimerNombre"]="el nombre no puede ir vacio";
        }

        if(regexIsEmpty.test(txtApellidoPaterno.value)){
            hasErrors=true;
            error["PrimerApellido"]="el apellido no puede ir vacio";
        }

        if(!(regexCorreo.test(txtCorreo.value))){
            hasErrors=true;
            error["Correo"] = "Correo invalido";
        }
        
        if (hasErrors){
            const errorKeys = Object.keys(error);
            let focusAssigned=false;
            for(errorKey of errorKeys) {
                const errorDivHolder = document.getElementById(`div${errorKey}`);
                if (errorDivHolder){
                    let errorDivMessage = document.getElementById(`${errorKey}Error`);
                    if (errorDivMessage) {
                        errorDivMessage.textContent = error[errorKey];
                    }else{
                        errorDivMessage = document.createElement("DIV");
                        errorDivMessage.textContent = error[errorKey];
                        errorDivMessage.classList.add('error');
                        errorDivHolder.appendChild(errorDivMessage);
                    }
                    let inputObject = errorDivHolder.querySelector('input');
                    inputObject.classList.add('error');
                    if(!focusAssigned){
                        inputObject.focus();
                        focusAssigned=true;
                    }
                }

            }
            console.log("encontro errores");
            e.preventDefault();
            e.stopPropagation();
        }
        
    }

    formSolicitud.addEventListener("submit", onSubmit_formSolicitud);

})