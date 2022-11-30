// const { set } = require("express/lib/application")


function div_1() {
    pergunta_um.style.display = "none"
    pergunta_dois.style.display = "flex"
}

function div_2() {
    pergunta_dois.style.display = "none"
    pergunta_tres.style.display = "flex"
}

function div_3() {
    pergunta_tres.style.display = "none"
    pergunta_quatro.style.display = "flex"
}

function div_4() {
    pergunta_quatro.style.display = "none"
    pergunta_cinco.style.display = "flex"
}

function div_5() {
    pergunta_cinco.style.display = "none"
    pergunta_seis.style.display = "flex"
}

var valor = [];
var fk = 0;
function div_final() {

    var p1 = document.querySelector('input[name="apoia"]:checked').value;
    var p2 = document.querySelector('input[name="paz"]:checked').value;
    var p3 = document.querySelector('input[name="bondade"]:checked').value;
    var p4 = document.querySelector('input[name="conflitos"]:checked').value;
    var p5 = document.querySelector('input[name="foco"]:checked').value;
    var p6 = document.querySelector('input[name="luta"]:checked').value;


    valor.push(p1, p2, p3, p4, p5, p6)

    var kidness = 0;
    var eco = 0;
    var junk = 0;
    var cyber = 0;
    var free = 0;
    var gov = 0;



    for (var contador = 0;
        contador < valor.length;
        contador++) {

        if (valor[contador] == "kid") {
            kidness++;
        } else if (valor[contador] == "eco") {
            eco++;
        } else if (valor[contador] == "junk"){
            junk++;
        } else if (valor[contador] == "cyber"){
            cyber++;
        } else if(valor[contador] == "free"){
            free++;
        } else if(valor[contador] == "gov"){
            gov++;
        }
    }

    console.log(valor)
    if (kidness > junk && kidness > cyber && kidness > free && kidness > gov && kidness > eco) {
        fk = 1;
        pergunta_seis.style.display = "none"
        resposta_k.style.display = "flex"
    } else if( eco > kidness && eco > junk && eco > cyber && eco > free && eco > gov) {
        fk = 2;
        pergunta_seis.style.display = "none"
        resposta_e.style.display = "flex"
    } else if(junk > kidness && junk > eco && junk > free && junk > gov && junk > cyber){
        fk = 3;
        pergunta_seis.style.display = "none"
        resposta_j.style.display = "flex"
    } else if (cyber > kidness && cyber > eco && cyber > free && cyber > gov && cyber > junk){
        fk = 4;
        pergunta_seis.style.display = "none"
        resposta_c.style.display = "flex"
    } else if (free > kidness && free > junk && free > eco && free > cyber && free > gov){
        fk = 5;
        pergunta_seis.style.display = "none"
        resposta_f.style.display = "flex"
    } else if (gov > kidness && gov > eco && gov > junk && gov > cyber && gov > free){
        fk = 6;
        pergunta_seis.style.display = "none"
        resposta_g.style.display = "flex"
    } 

};

var idusuario = sessionStorage.idUsuario;
// const {cadastrarTribo} = require("../../src/models/usuarioModel");
function cadastrarTribo() {
    

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
 resultado()

    if (fk == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        return false;
    }
    else {
        /* setInterval(sumirMensagem, 5000)*/
        
        
        // Enviando o valor da nova input
        console.log(fk);
        console.log(idusuario);
        fetch("/usuarios/cadastrarTribo", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            fkTriboUserServer: fk,
            idusuarioServer: idusuario
        })
    }).then(function (resposta) {
        
        console.log("resposta: ", resposta);
        
        if (resposta.ok) {
            cardErro.style.display = "block";
            
            /*     setTimeout(() => {
                window.location = "login.html";
            })*/
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
       
    });

    return false;
}}

function resultado() {
    

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
 

    if (fk == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        return false;
    }
    else {
        /* setInterval(sumirMensagem, 5000)*/
        
        
        // Enviando o valor da nova input
        console.log(fk);
        console.log(idusuario);
        fetch("/usuarios/resultado", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            fkTriboUser2Server: fk,
            fkusuarioServer: idusuario
        })
    }).then(function (resposta) {
        
        console.log("resposta: ", resposta);
        
        if (resposta.ok) {
            
                         window.location = "saibamais.html";
            
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
       
    });

    return false;
}}

/*function sumirMensagem() {
    cardErro.style.display = "none"
}*/
    