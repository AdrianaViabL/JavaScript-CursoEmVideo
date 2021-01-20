//usando função dentro do objeto
let amigo = {
    nome:'zé', 
    sexo:'M',
    peso:87,
    engorda(p=0){
        console.log('engordou')
        this.peso += p
    }
}

amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

