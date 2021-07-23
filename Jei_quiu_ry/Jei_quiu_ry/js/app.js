

let paragrafo=$("#paragrafo1").text();
console.warn(paragrafo);

let campo_nome = $("#nome");

let nome= campo_nome.attr("placeholder");
let classe= campo_nome.attr("class");
let tipo = campo_nome.attr("type");


console.log(classe);
console.log(nome);
console.log(tipo);

$("p").attr("class","destacar");
$("#nome").attr("class","link");


$("p").mouseover(
    function(){
        console.warn("SAI DE CIMA DE MIM")

    }
);

function botao_raiz(){
    console.log("botão a moda antiga, mas funciona");
}

$("button").click(
    function (){
        console.log("Qualquer botão clicado eu me meto, não importa se é raiz");
    }
);