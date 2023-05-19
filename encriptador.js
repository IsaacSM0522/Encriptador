/* a = ai // e = enter
i = imes //  o = ober // u = ufat */

let textoParaCodificar = document.getElementById("textoParaCodificar"); // primer cuadro de texto
let botonEncriptar = document.getElementById("botonEncriptar"); // boton Encriptr!
let textoEncriptado = document.getElementById("textoEncriptado");// segundo cuadro de texto
let botonDesencriptar = document.getElementById("botonDesencriptar");// boton DesEncriptr!
let botonCopiar = document.getElementById("boton-copiar")


botonEncriptar.addEventListener("click" , function(){
    /* var divTextoEncriptado = document.getElementById("textoEncriptado");
    divTextoEncriptado.innerText = "Este es mi texto encriptado"; */

    
    let valorPrimerTexto = textoParaCodificar.value
    let cambioDeVocales = valorPrimerTexto.replaceAll ("a", "ai");
    cambioDeVocales = cambioDeVocales.replaceAll ("e", "enter");
    if (!cambioDeVocales.includes("ai")) {
        cambioDeVocales = cambioDeVocales.replaceAll("i", "imes");
    }
    cambioDeVocales = cambioDeVocales.replaceAll ("o", "ober");
    cambioDeVocales = cambioDeVocales.replaceAll ("u", "ufat");
    textoEncriptado.innerText = cambioDeVocales
});
 

botonDesencriptar.addEventListener("click" , function(){
    let valorPrimerTexto = textoParaCodificar.value
    let cambioDeVocales = valorPrimerTexto.replaceAll ("ai", "a");
    cambioDeVocales = cambioDeVocales.replaceAll ("enter", "e");
    cambioDeVocales = cambioDeVocales.replaceAll ("imes", "i");
    cambioDeVocales = cambioDeVocales.replaceAll ("ober", "o");
    cambioDeVocales = cambioDeVocales.replaceAll ("ufat", "u");
    textoEncriptado.innerText = cambioDeVocales
}); 

botonCopiar.addEventListener("click", function(){
    const textoCopiar = textoEncriptado;
    const seleccionTexto = window.getSelection();
    const rangoTexto = document.createRange();

    rangoTexto.selectNodeContents(textoCopiar);
    seleccionTexto.removeAllRanges();
    seleccionTexto.addRange(rangoTexto);
    document.execCommand('copy');
    seleccionTexto.removeAllRanges();
});




















