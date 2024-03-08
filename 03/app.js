// const numeros = ['ola', 10, true, {}, 'Eduardo']

// // Destruturação
// const [saudacao, numero, booleano, objeto, aluno] = numeros

// // Spread and rest
// const [saudacoes,...resto] = numeros

// numeros[4] = 'Carol'

// console.log(numeros.length)

const listaFilmes = document.querySelector('#listaFilmes')
// const filmeInput = document.querySelector('#filmeInput')
// const btn1 = document.querySelector('button')
// const filmes = ['Lord of the Rings', 'Nightmare Before Christmas', 'Clockwork Orange', 'Butterfly Kisses', 'Pulp Fiction']
const filmes = [{nome: 'Lord of the Rings', lancamento:'2002', genero:'Fantasia'}, {nome: 'Nightmare Before Christmas', lancamento:'1997', genero:'Musical'}, {nome: 'Clockwork Orange', lancamento:'1971', genero:'Si-fi'}, {nome: 'Butterfly Kisses', lancamento:'2018', genero:'Horror'}, {nome: 'Pulp Fiction', lancamento:'1994', genero:'Thriller'}]


window.onload = ()=>{
    for(let i=0; i < filmes.length; i++){
        let itemLista = document.createElement('li');
        listaFilmes.append(itemLista);
        itemLista.innerHTML = filmes[i].nome

        let anoLancamento = document.createElement('li')
        itemLista.append(anoLancamento)
        anoLancamento.innerHTML = filmes[i].lancamento

        let genero = document.createElement('li')
        itemLista.append(genero)
        genero.innerHTML = filmes[i].genero
    }
}

// btn1.addEventListener('click', ()=>{
//     let filmeDigitada = filmeInput.value
//     filmes.push(filmeDigitada)
// })
