// Conceitos
/* 
	//Classes

class List {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List {
	constructor() {
		super();

		this.usuario = 'Johnny';
	}

	mostraUsuario() {
		console.log(this.usuario);
	}
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
	MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

//Classe Estatica

class Matematica {
	static soma(a, b) {
		return a + b;
	}
}

console.log(Matematica.soma(1,2));
*/

/*

//Arrays

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
	return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
	return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
	return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
	return item === 4;
});

console.log(find);

*/

/*

//Arrow Function

const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: 'Johnny' });

console.log(teste());

*/

//Valores Padrão

/*

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

*/

//Desestruturação de Objetos

/*

const usuario = {
	nome: 'Johnny',
	idade: 23,
	endereco: {
		cidade: 'São Paulo',
		estado: 'SP',
	},
};

function mostraNome({nome, idade}) {
	console.log(nome, idade);
}

mostraNome(usuario);

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/

// REST

/*

const usuario = {
	nome: 'Johnny',
	idade: 23,
	empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

console.log(soma(1,3));
*/

// SPREAD

/*

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
	nome: 'Johnny',
	idade: 23,
	empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Diego' };

console.log(usuario2);

*/

//Template Literals

/*

const nome = 'Johnny';
const idade = 23;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/

//Object Short Syntax

/*

const nome = 'Johnny';
const idade = 23;

const usuario = {
	nome,
	idade,
	empresa: 'Rocketseat'
}

console.log(usuario);

///////////////////////////////////////////////////

*/

// Webpack Server


//import/export
/*
import soma, { sub } from ';/funcoes';
//import somaFunction from './funcoes';
//import * as funcoes from './funcoes';

console.log(soma(1,2));
console.log(sub(4,2));
//console.log(funcoes.sub(4,2));
*/

//webpack dev server

//alert('Hello World');

///////////////////////////////////////////////////

// Async/await

//-- Async/await

/*
const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromise()
// 	.then(response => {
// 		console.log(response);
// 	})
// 	.catch(err => {

// 	});

async function executaPromise() {
	console.log(await minhaPromise());
	console.log(await minhaPromise());	
	console.log(await minhaPromise());
}

const executaPromise = async () => {
	console.log(await minhaPromise());
	console.log(await minhaPromise());	
	console.log(await minhaPromise());
};

executaPromise();
*/

// -- Configurando Axios

// import axios from 'axios';

/*
class Api {
	static async getUserInfo(username) {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`)

			console.log(response);
		} catch (err) {
			console.warn('Erro na API');
		}
	}
}

Api.getUserInfo('diego3g');
*/


//Desafios (Colar o desafio do "desafios.js" apartir daqui para testar)

