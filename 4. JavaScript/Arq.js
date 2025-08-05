// Objetos
const felipe = {
    name: "Felipe Barros",
    idade: 26,
    descrever: function(){
        console.log(`Meu nome é ${this.name}`)
    }
};

console.log(felipe.name)
console.log(felipe.idade)

felipe.altura = 1.70;

console.log(felipe.altura)

delete felipe.name;
console.log(felipe)



//Classe

class Pessoa{
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// Arrays (Listas de conteudos)

const alunos = ["João","Vitor","Maria"];
console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos.push("Renan"); //Add
alunos.push(10);
console.log(alunos);

alunos[3] = "Vinícius";

alunos.pop();
console.log(alunos);

alunos.shift()///Remove o primeiro elemento

alunos.length(); // Tamanho da lista

