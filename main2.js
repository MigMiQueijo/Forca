var player1 = localStorage.getItem("player1")
var player2 = localStorage.getItem("player2")
document.getElementById("player1Name").innerHTML = player1 + "- "
document.getElementById("player2Name").innerHTML = player2 + "- "
var player1Score = 0
var player2Score = 0
document.getElementById("player1Score").innerHTML = "Score: " + player1Score
document.getElementById("player2Score").innerHTML = "Score: " + player2Score
function enviar() {
    obterPalavra = document.getElementById("palavra").value
    palavra = obterPalavra.toLowerCase()
    //console.log(palavra)
    var charAt1 = palavra.charAt(1)
    console.log(charAt1)
    var length = Math.floor(palavra.length/2)
    charAt2 = palavra.charAt(length)
    console.log(charAt2)
    charAt3 = palavra.charAt(palavra.length - 2)
    console.log(charAt3)
    var remove1 = palavra.replace(charAt1,"_" )
    var remove2 = remove1.replace(charAt2,"_" )
    var remove3 = remove2.replace(charAt3,"_" )
    console.log(remove3)
    palavraDaForca = "<h4 id='display'>Palavra: " + remove3 + "</h4>"
    input = "<br> resposta: <input  type='text' id='input'>"
    button = "<button onclick='Checar()'>Checar</button>"
    document.getElementById("output").innerHTML = palavraDaForca + input + button
    document.getElementById("palavra").value = ""
}

var turnoPergunta = "player1"
var turnoResposta = "player2"

function Checar() {
    var resposta = document.getElementById("input").value
    resposta = resposta.toLowerCase()
    console.log(resposta)
    if (resposta == palavra) {
        if (turnoResposta == "player2") {
            player2Score = player2Score + 1
            document.getElementById("player2Score").innerHTML = player2Score
        }
        else{
            player1Score = player1Score + 1
            document.getElementById("player1Score").innerHTML = player1Score
    }
    if (turnoPergunta == "player1") {
        turnoResposta = "player1"
        turnoPergunta = "player2"
        document.getElementById("answerPlayer").innerHTML = "Resposta: " + player1
        document.getElementById("playerQuestion").innerHTML ="Pergunta: "+ player2
    }
    else{
        turnoResposta = "player2"
        turnoPergunta = "player1"
        document.getElementById("answerPlayer").innerHTML ="Resposta: " + player2
        document.getElementById("playerQuestion").innerHTML ="Pergunta: "+ player1
    }

    }
    document.getElementById("output").innerHTML = ""
}