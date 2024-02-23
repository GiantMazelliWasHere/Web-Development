const prompt = require('prompt-sync')()

function getUserInfo(){
    let height = parseFloat(prompt("Digite sua altura "))
    let weight = parseFloat(prompt("Digite seu peso "))
    
    return {
        // objeto - método para guardarmos múltiplas informações.
        pesoInformado: weight,
        alturaInformada: height
    }
}

function calcImc(alturaDoUsuario = 0, pesoDoUsuario = 0){
    return pesoDoUsuario / alturaDoUsuario**2
    // deve fazer sentido por si só, sem necessitar das outras funções
}

function main(){
    let peso = getUserInfo().pesoInformado
    let altura = getUserInfo().alturaInformada
    let imc = calcImc(altura,peso)
    console.log(`Seu IMC é ${imc}`)
}

main()

function imprimir(idade){
    console.log(idade)
}

const calcIdade = idade => console.log(idade) //Arrow function - forma reduzida de escrever funções com apenas uma linha de código

btn1.addEventListener('click', ()=> { //Função anônima - usada quando n vamos chama-la depois
    console.log("Hello")
})