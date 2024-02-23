function main(){
    let livros = pegador()

    let preco = calculoPreco(livros)

    console.log(`Parabéns você comprou ${livros} livro(s) da saga Harry Potter e pagou R$${preco}!`)
}

function pegador(){
    let livros = parseInt(window.prompt("Quantos livros o querido está comprando?"))
    return livros
}

function calculoPreco(quantidade){
    if(quantidade >= 7){
        let preco = quantidade * 15
        return preco
    } else {
        let preco = quantidade * 22
        return preco
    }
}

main()