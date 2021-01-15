//aula 12 - condições aninhadas
var idade = 70
console.log(`voce tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
}else{ 
    if (idade <= 17 || idade > 65){
        console.log('voto opcional')
    }else{
        console.log('voto obrigatório')
    }
}