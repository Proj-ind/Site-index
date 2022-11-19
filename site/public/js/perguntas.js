

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
        pergunta_seis.style.display = "none"
        resposta_k.style.display = "flex"
    } else if( eco > kidness && eco > junk && eco > cyber && eco > free && eco > gov) {
        pergunta_seis.style.display = "none"
        resposta_e.style.display = "flex"
    } else if(junk > kidness && junk > eco && junk > free && junk > gov && junk > cyber){
        pergunta_seis.style.display = "none"
        resposta_j.style.display = "flex"
    } else if (cyber > kidness && cyber > eco && cyber > free && cyber > gov && cyber > junk){
        pergunta_seis.style.display = "none"
        resposta_c.style.display = "flex"
    } else if (free > kidness && free > junk && free > eco && free > cyber && free > gov){
        pergunta_seis.style.display = "none"
        resposta_f.style.display = "flex"
    } else if (gov > kidness && gov > eco && gov > junk && gov > cyber && gov > free){
        pergunta_seis.style.display = "none"
        resposta_g.style.display = "flex"
    } 

}