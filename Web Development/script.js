let peso = window.prompt('Peso');
let altura = window.prompt('Altura (com virgula)');

function calculo_imc(peso, altura){
    let resultado = peso / (altura**2)
    return resultado.toFixed(2)
}



if(calculo_imc(peso, altura) < 18.5){
    window.alert('O seu IMC é: '+ calculo_imc(peso, altura) + " por isso você está com baixo peso");
}
else if (calculo_imc(peso, altura) == 18.5 && calculo_imc(peso, altura) <= 24.99){
    window.alert('O seu IMC é:'+ calculo_imc(peso, altura) + " por isso você está dentro do normal");
}
else if (calculo_imc(peso, altura) == 25 && calculo_imc(peso, altura) <= 29.99){
    window.alert('O seu IMC é: '+ calculo_imc(peso, altura) + " por isso você está com sobrepeso");
}
else{
    window.alert('O seu IMC é: '+ calculo_imc(peso, altura) + " por isso você está obeso");
}