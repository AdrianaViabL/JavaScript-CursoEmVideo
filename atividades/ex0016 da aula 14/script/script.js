function contar(){

    var ini = document.getElementById('ini')
    var fim = document.querySelector('input#fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if (ini.value == '' || fim.value == ''){
        res.innerHTML = `impossível contar!` 
    }else{
        vlpasso = Number(passo.value)
        if (passo.value == '' || Number(passo.value) == 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            vlpasso = 1
        }
        vlini = Number(ini.value)
        vlfim = Number(fim.value)
        res.innerHTML = `<p>contando:</p>`
        for(vlini;vlini <= vlfim;vlini += vlpasso){
            res.innerHTML += `${vlini} 👉`
        }
        res.innerHTML += `🏁`
    }
}