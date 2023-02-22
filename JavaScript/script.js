


window.onload = function () {
    document.getElementById("botonE").addEventListener("click", eliminarIMG);
    document.getElementById("botonD").addEventListener("click", eliminarIMG);
    /**document.getElementById("botonE").onclick = eliminarIMG;*/
}

/** FUNCION CORRECTA
function eliminarIMG() {

    if (document.getElementById("areaTextoD").value.length == 0) {

        alert("No ha digitado ninguna letra");

    }
    else {
        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";
    }

}
*/

function eliminarIMG() {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

}
