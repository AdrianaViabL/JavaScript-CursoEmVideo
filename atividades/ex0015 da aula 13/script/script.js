function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.nodeValue.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    

}
