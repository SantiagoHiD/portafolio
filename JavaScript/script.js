


window.onload = function () {
  

    document.getElementById("botonE").addEventListener("click", copiarTxto);
    /**document.getElementById("botonE").onclick = eliminarIMG;*/
}

function copiarTxto() {

    if (document.getElementById("areaTextoE").value.length != 0) {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

        var contraseña = document.getElementById("areaTextoE").value; 
        document.getElementById("areaTextoD").value = contraseña;
    }
    else{
        alert("Ningun mensaje fue encontrado");
    }
}