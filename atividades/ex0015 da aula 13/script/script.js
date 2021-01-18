function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano || ano - Number(fAno.value) > 120){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')//criando a tag img dinamicamente
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade < 10){
                img.setAttribute('src', 'img/garoto.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'img/jovemh.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'img/adulto.jpg')
            }else{
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else{
            genero = 'mulher'
            if (idade < 10){
                img.setAttribute('src', 'img/garota.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'img/jovemf.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'img/adulta.jpg')
            }else{
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}
