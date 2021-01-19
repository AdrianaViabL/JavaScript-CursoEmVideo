//estudando variaveis compostas (arrays)
let num = [5, 6, 4, 1]
num.sort()
console.log(num)
num[4] = 8
console.log(num)
num.push = 10 //adiciona no final da lista

console.log(`o vetor tem ${num.length} posições`)
console.log(num[1])

/*for(let pos = 0;pos < num.length; pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(num[pos])
}

let posicao = num.indexOf(8)
if (posicao < 0){
    console.log('o valor nao foi encontrado!')
}else{
    console.log(`o valor esta na posição ${posicao}`)
}