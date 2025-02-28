

interface Restaurante {
    id: number,
    nome: string,
    aberto: boolean
}


interface Cliente {
    id: number;
    nome: string,
    favoritos: Array<Restaurante>,
}


const clientes: Array<Cliente> = [
    {
        "id": 1,
        "nome": "Mathias Gheno",
        "favoritos": [
            {
                "id": 1,
                "nome": "Restaurante Bom Gosto",
                "aberto": false
            }
        ]
    },
    {
        "id": 2,
        "nome": "João Silva",
        "favoritos": [
            {
                "id": 2,
                "nome": "Pizzaria Delícia",
                "aberto": true
            },
            {
                "id": 3,
                "nome": "Churrascaria Gaúcha",
                "aberto": false
            }
        ]
    },
    {
        "id": 3,
        "nome": "Maria Souza",
        "favoritos": [
            {
                "id": 4,
                "nome": "Padaria Pão Quente",
                "aberto": true
            }
        ]
    },
    {
        "id": 4,
        "nome": "Carlos Almeida",
        "favoritos": [
            {
                "id": 5,
                "nome": "Lanchonete Saborosa",
                "aberto": true
            },
            {
                "id": 6,
                "nome": "Restaurante Vegetariano Verde",
                "aberto": true
            }
        ]
    },
    {
        "id": 5,
        "nome": "Ana Pereira",
        "favoritos": [
            {
                "id": 7,
                "nome": "Café Aroma",
                "aberto": false
            }
        ]
    }
]
