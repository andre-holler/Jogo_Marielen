var acertos = 0
var dificuldade = 10


function valorFacil(){
    var valor = Math.floor(Math.random() * 10) + 1
    return valor
}

function valorMedio(){
    var valor = Math.floor(Math.random() * 50)+1
    return valor
}

function valorDificil(){
    var valor = Math.floor(Math.random() * 100)+1
    return valor
}

function obterValor(){
    var valorInput = document.getElementById("numeroInput").value
    return valorInput
}

function jogar(valorCerto, valorEscolhido){
    document.getElementById("numeroInput").value=""
    if (valorCerto == valorEscolhido){
        document.getElementById("insertResultado").innerText = "Você acertou o número"
    }else{
        document.getElementById("insertResultado").innerText = "Você errou. \nO número era "+valorCerto
    }
}

function jogarModoSecreto(valorCerto, valorEscolhido){
    document.getElementById("numeroInput").value=""
    

    if (valorCerto == valorEscolhido){
        document.getElementById("insertResultado").innerText = "Você acertou o número"

        acertos += 1
        dificuldade = dificuldade*10

        document.getElementById("calcularDificuldade").innerText = `A chance de você ter acertado ${acertos+1} números é de 1/${dificuldade}.`
        document.getElementById("displayAcertos").innerText = `Até agora você tem ${acertos} acertos.`

    }else{
        document.getElementById("insertResultado").innerText = "Você errou. \nO número era "+valorCerto

        acertos = 0
        dificuldade = 10
        
        document.getElementById("calcularDificuldade").innerText = `A chance de você ter acertado ${acertos+1} números é de 1/${dificuldade}.`
        document.getElementById("displayAcertos").innerText = `Até agora você tem ${acertos} acertos.`

    }


}