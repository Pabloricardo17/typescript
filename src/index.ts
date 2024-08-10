const nome: string = 'Pablo';

const fazendoAula: boolean = true;

const diaDoMes: number = 10;

interface Pessoass {
    nome: string,
    anoNascimento?: number,
}


interface professor extends Pessoass {
    //disciplinas: string[],
    disciplinas: Array<string>, /** Generics */
}

interface aluno extends Pessoass {
    media: number,
}

const mathias: professor = {
    nome: 'Mathias',
    disciplinas: []

}


const ricardo: aluno = {
    nome: 'Ricardo',
    anoNascimento: 2001,
    media: 10,
}



console.log(nome);