
/*
function lertexto(){
    let texto = document.getElementById('entradatexto').value

    if (texto === '' ){
        console.log("nulo")
        alert("VALOR INDEFINIDO")
    }
    

    else{
        texto = parseInt(texto)

        if (texto > 10){qweqweq
            console.log("maior")
        }

        else{
            console.log("menor")
        }
    }
}
*/
var lista = []
function adicionar(){
    let texto = document.getElementById('adlista').value
    lista.push(texto)
    console.log(lista)  
}

function pesquisar(){

    let textopesq = document.getElementById('entradatexto').value
    if (lista.indexOf(textopesq) != -1){
        console.log("existe")
    }
}