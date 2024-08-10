

function filtrarAnosAntigos(anos: Array<number>) {
    const anoAtual = new Date().getFullYear();
    const anosAntigos = [];
    for (let i = 0; i < anos.length; i++) {
        if (anos[i] < anoAtual) {
            anosAntigos.push(anos[i])
           
        }

    }
    return anosAntigos;
}

const resultado = filtrarAnosAntigos([2024, 2025, 2000, 2010]);//[2000, 2010]
console.log(resultado)