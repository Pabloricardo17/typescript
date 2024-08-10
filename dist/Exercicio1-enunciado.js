"use strict";
const teclado = {
    "descricao": "Teclado Logitech MX Keys",
    "categorias": ["informática", "periféricos", "teclado"],
    "valor": 600
};
const mouse = {
    "descricao": "Mouse Logitech MX Master 3",
    "categorias": ["informática", "periféricos", "mouse"],
    "valor": 500
};
const monitor = {
    "descricao": "Monitor Dell UltraSharp",
    "categorias": ["informática", "monitores"],
    "valor": 1500
};
const notebook = {
    "descricao": "Notebook Apple MacBook Pro",
    "categorias": ["informática", "notebooks"],
    "valor": 12000
};
const cadeira = {
    "descricao": "Cadeira Gamer DXRacer",
    "categorias": ["móveis", "cadeiras"],
    "valor": 1000
};
const perifericos = [
    teclado,
    mouse,
    monitor,
    notebook,
    cadeira
];
console.log(perifericos);
