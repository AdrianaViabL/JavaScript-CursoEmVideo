let n = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function inLista(val, l){
    if(l.indexOf(Number(val)) != -1){
        return true
    }else{
        return false
    }
}

function validador(){
    
    if (isNum(n.value) && !inLista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text += `Valor ${n.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista!')
    }
    n.value = ''
    n.focus()
}


function isNum(val){
    if(Number(val) >= 1 && Number(val) <= 100){
        return true
    }else
        return false
}

function finalizar(){
    if (valores.length == 0){
        window.alert('insira valores na lista!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]  
        let soma = 0      
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valore é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores é ${soma / tot}</p>`
    }

}