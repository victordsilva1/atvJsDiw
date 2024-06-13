let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
function enviar(){
    let valor1 = parseFloat(nota1.value);
    let valor2 = parseFloat(nota2.value);
    let valor3 = parseFloat(nota3.value);
    let media = (valor1+valor2+valor3)/3;
    alert(media);
}