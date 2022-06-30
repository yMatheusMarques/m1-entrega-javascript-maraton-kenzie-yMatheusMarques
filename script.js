function positions(primeiro, segundo, terceiro){
    let posicaoArr = [primeiro, segundo, terceiro]
    
    if(posicaoArr[1] == "Daniel"){
        posicaoArr = [segundo, primeiro, terceiro]
    }
    else if(posicaoArr[2] == "Daniel"){
        posicaoArr = [primeiro, terceiro, segundo]
    }   
console.log('1º colocado: ' + posicaoArr[0] + ' 2º colocado: ' + posicaoArr[1] + ' 3º colocado: ' + posicaoArr[2])
}

positions("Rafael", "Daniel", "Manoel")
    
    

  