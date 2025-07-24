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

