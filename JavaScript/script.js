
window.onload = function () {


    document.getElementById("botonE").addEventListener("click", ejecutarEncriptarTexto);
    document.getElementById("botonD").addEventListener("click", ejecutarDesencriptarTexto);
    document.getElementById("botonC").addEventListener("click", copiarTexto);
    /**document.getElementById("botonE").onclick = eliminarIMG;*/
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function ejecutarEncriptarTexto() {

    if (document.getElementById("areaTextoE").value.length != 0) {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

        encriptado = encriptarTexto(areaTextoE.value);

        document.getElementById("areaTextoD").value = encriptado;

        document.getElementById("areaTextoE").value = "";


    }
    else {
        alert("Ningun mensaje fue encontrado");
    }
}

function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize();
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        if (texto.includes(matriz[i][0])) {
            texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return texto;
}

function ejecutarDesencriptarTexto() {

    if (document.getElementById("areaTextoE").value.length != 0) {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

        encriptado = desencriptarTexto(areaTextoE.value);

        document.getElementById("areaTextoD").value = encriptado;

        document.getElementById("areaTextoE").value = "";


    }
    else {
        alert("Ningun mensaje fue encontrado");
    }
}

function desencriptarTexto(textod) {
    textod = textod.toLowerCase();
    textod = textod.normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize();
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        if (textod.includes(matriz[i][1])) {
            textod = textod.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return textod;

}

function copiarTexto() {

    var copyText = document.getElementById("areaTextoD");
    navigator.clipboard.writeText(copyText.value);

}

/* ENCRIPTAR DE OTRA MANERA
var encriptar 

function encriptarTexto() {

    if (document.getElementById("areaTextoE").value.length != 0) {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

        var contraseña = document.getElementById("areaTextoE").value;

        encriptar = window.btoa(contraseña);

        document.getElementById("areaTextoD").value = encriptar;
    }
    else {
        alert("Ningun mensaje fue encontrado");
    }
}


function desencriptarTexto() {

    if (document.getElementById("areaTextoE").value.length != 0) {

        document.getElementById("imgMuñeca").style.display = "none";
        document.getElementById("mensajeEspera").style.display = "none";
        document.getElementById("mensajePeticion").style.display = "none";
        document.getElementById("areaTextoD").style.display = "block";
        document.getElementById("botonC").style.display = "block";

        var desencriptar = window.atob(encriptar);

        document.getElementById("areaTextoD").value = desencriptar;
    }
    else {
        alert("Ningun mensaje fue encontrado");
    }
    
}
*/