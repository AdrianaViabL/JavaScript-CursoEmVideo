function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img')
    var fot = window.document.querySelector('footer')
    var data = new Date()
    var hora  = data.getHours()
    hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 1 && hora < 12){
        img.setAttribute('src', 'img/manha.jpg')
        window.document.body.style.background='#fdda5c'
        fot.style.background='#ad953e'
    }else if (hora >=12 && hora < 18){
        img.setAttribute('src', 'img/tarde.jpg')
        window.document.body.style.background='#7a5e49'
        fot.style.background='#664f3e'
    }else{
        img.src = 'img/noite.jpg'
        window.document.body.style.background= '#1b4263'
        fot.style.background='#0f2e46'
    }

}





