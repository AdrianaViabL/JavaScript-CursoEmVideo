function calcular(){
    var val = document.getElementById('num')
    var res = document.querySelector('div#res')
    num = Number(val.value)
    
    if (num == ''){
        window.alert('Por favor, digite um numero!')
    }else{
        res.innerHTML = ''
        for (var vl = 1 ; vl <= 10 ; vl++){
            var resultado = num * vl
            res.innerHTML += `<p>${num} x ${vl} = ${resultado}</p>`
        }
    }
}