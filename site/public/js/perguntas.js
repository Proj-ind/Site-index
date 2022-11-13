

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

lista_tribo_k = []
lista_tribo_e = []
function div_final() {
    const kid = k1.value;
    const kid_2 = k2.value;
    const kid_3 = k3.value;
    const kid_4 = k4.value;
    const kid_5 = k5.value;
    const kid_6 = k6.value;

    const eco = e1.value;
    const  eco_2 = e2.value;
    const  eco_3 = e3.value;
    const  eco_4 = e4.value
    const  eco_5 = e5.value
    const  eco_6 = e6.value
    // var kidness =  {
    //     k1,
    //     k2,
    //     k3,
    //     k4,
    //     k5,
    //     k6
    // }

    // var eco = {
    //     e1,
    //     e2,
    //     e3,
    //     e4,
    //     e5,
    //     e6
    // }
    

    lista_tribo_k.push(kid, kid_2, kid_3, kid_4, kid_5, kid_6)
    lista_tribo_e.push(eco, eco_2, eco_3, eco_4, eco_5, eco_6)
        
        if (lista_tribo_k.lenght < lista_tribo_e.lenght) {
         pergunta_seis.style.display = "none"
        resposta_k.style.display = "flex"
        } else {
            pergunta_seis.style.display = "none"
            resposta_e.style.display = "flex"
        }
}

