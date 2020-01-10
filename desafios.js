//Desafio 01

class Usuario {
	constructor(email, senha) {
		this.email = email;
		this.senha = senha;
	}

	isAdmin() {
		if(this.admin === true)
			return true
		else 
			return false;
	}
}

class Admin extends Usuario{
	constructor() {
		super();

		this.admin = true;
	}
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin())
console.log(Adm1.isAdmin())

//Desafio 02

const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const idades = usuarios.map(function(item) {
	return item.idade;
});

console.log(idades);

const usuarioRocket = usuarios.filter(function(item) {
	if(item.empresa === 'Rocketseat' && item.idade > 18)
		return item;
});

console.log(usuarioRocket);

const usarioGoogle = usuarios.find(function(item) {
	if(item.empresa === 'Google')
		return item;
});

console.log(usarioGoogle);

const novaIdade = usuarios.map(function(item, index) {
	return {
			nome: item.nome,
			idade: item.idade * 2,
			empresa: item.empresa
		};
});

const usuarioMax50 = novaIdade.filter(function(item) {
	if(item.idade < 50)
		return item;
});

console.log(usuarioMax50);

//Desafio03

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log(newArr);

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome,idade));
console.log(mostraUsuario(nome));

const promise = () => {
	return new Promise((resolve, reject) => resolve());
}

console.log(promise);

//Desafio 04

const empresa = {
	nome: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC',
	}
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({ nome, idade }) {
	return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//Desafio 05

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

const usuario = {
	nome: 'Diego',
	idade: 23,
	endereco: {
		cidade: 'Rio do Sul',
		uf: 'SC',
		pais: 'Brasil',
	}
};

const usuario2 = {...usuario,	nome: 'Gabriel' };
const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' }};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);

//Desafio 06

const usuario = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos.`);

//Desafio 07

const nome = 'Diego';
const idade = 23;

const usuario = {
	nome,
	idade,
	cidade: 'Rio do Sul',
};

console.log(usuario);
