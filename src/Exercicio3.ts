

interface Produto {
    nome: string,
    preco: number,

}

const produtos: Array<Produto> = [
    {
        nome: 'Chocolate',
        preco: 20,
    }
]

function filtrarProdutosPorPreco(produtos: Array<Produto>, limite: number) : Array<Produto>{
   const produtosFiltrados: Array<Produto> = [];

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco <= limite) {
            produtosFiltrados.push(produtos[i]);

        }

    }
    return produtos;

}


const resultado2 = filtrarProdutosPorPreco(produtos, 100);//[2000, 2010]
console.log(resultado)