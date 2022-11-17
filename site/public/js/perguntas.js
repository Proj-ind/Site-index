
var valor = [];

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

function div_final() {
   var kidness = Number(k1.value) + 
   Number(k2.value) +
   Number(k3.value) +
   Number(k4.value) +
   Number(k5.value) +
   Number(k6.value); 

var eco = Number(e1.value) +
Number(e2.value) +
Number(e3.value) +
Number(e4.value) +
Number(e5.value) +
Number(e6.value);

var junk = Number(j1.value) +
Number(j2.value) +
Number(j3.value) +
Number(j4.value) +
Number(j5.value) +
Number(j6.value);

var cyber = Number(c1.value) +
Number(c2.value) +
Number(c3.value) +
Number(c4.value) +
Number(c5.value) +
Number(c6.value);

var freedom = Number(f1.value) +
Number(f2.value) +
Number(f3.value) +
Number(f4.value) +
Number(f5.value) +
Number(f6.value);


var goverment = Number(g1.value) +
Number(g2.value) +
Number(g3.value) +
Number(g4.value) +
Number(g5.value) +
Number(g6.value);

var total = (kidness + eco + junk + cyber + freedom + goverment) /2 ;

valor.push(kidness, eco, junk, cyber, freedom, goverment)
if ( valor > 10) {
    pergunta_seis.style.display = "none"
    resposta_k.style.display = "flex"
} else if (valor < 10){
    pergunta_seis.style.display = "none"
    resposta_e.style.display = "flex"
}
console.log(valor)
}
