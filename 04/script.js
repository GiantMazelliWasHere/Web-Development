// Cria um cookie e opicionalmente setamos quando esse cookie expirará 
// document.cookie = "username=Eduardo; expires=Thu, 14 Dec 1034 12:00:00 UTC; path=/";

let nome = ["Edu", "Paulo", "Joanna"]
// transforma um objeto javaScript em JSON
let nomeJson = JSON.stringify(nome)

// Criar um item no local storage
localStorage.setItem('nome', nomeJson)

// Retransformar o objeto Json em objeto javaScript
const nomes = JSON.parse(localStorage.getItem(nomeJson))

// Buscar o item no local storage
// localStorage.getItem('nome')

// Remove um item criado no local storage
// localStorage.removeItem()

// Limpa o local storage inteiro
// localStorage.clear()