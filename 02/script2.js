const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

const intemLista = document.createElement('li')

const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click', () => {
    listaFilmes.append(intemLista)
    intemLista.innerHTML=textoUsuario.value
    intemLista.classList.toggle(active)
    // add - adiciona
    // toogle - liga e desliga
    // .style - mudar o css
})