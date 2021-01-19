function calcular(){
    var val = document.getElementById('num')
    var res = document.querySelector('select#res')
    num = Number(val.value)
    
    if (num.length == ''){
        window.alert('Por favor, digite um numero!')
    }else{
        res.innerHTML = ''
        for (var vl = 1 ; vl <= 10 ; vl++){
            let item = document.createElement('option')
            item.value = `tab${vl}`
            item.text += `${num} x ${vl} = ${num * vl}`
            res.appendChild(item)
        }
    }
}