// let lista = [10, 2, 4, 6, 12, 1]

// console.log(lista.splice(0,1))
// console.log(lista)

// // método spread do maior valor do Js
// const maior = Math.max(...lista)

// // método spread do menor valor em JS
// const menor = Math.min(...lista)

// console.log(maior)
// console.log(menor)

// console.log(lista.sort(function (a, b) {
//     return a - b
// }))

// let lista = [10, 2, 4, 6, 12, 1]
let lista_vazia = []
let lista = [2, 3, 4, 5]
let lista_um = [2]


const MergeSortList = (lista_inicial) => {

    if (!lista_inicial){
        return "Lista vazia"
    }

    // lista com um elemento
    else if(lista_inicial.length <= 1){
        return lista_inicial
    }

    var lista_ordenada = lista_inicial.sort(function (a, b) {
        return a - b
    })

    // verificando se a lista já entrou ordenada
    if (lista_ordenada === lista_inicial) {
        return "Lista já ordenada!"
    }

    // vetor final
    let lista_final = []

    // enquanto houver elementos na lista
    while (lista_inicial.length > 0) {
        // pegando o menor elemento
        let menor_valor = Math.min(...lista_inicial)

        // adiciono o elemento no início do novo vetor final
        lista_final.push(menor_valor)

        // consulta na lista inicial
        const index = lista_inicial.indexOf(menor_valor)
    
        // removo esse elemento(menor_valor) da lista inicial 
        // dizendo a posição e a quantidade de itens que serão removidos
        lista_inicial.splice(index, 1)
    }
    // lista_final = [1, 2, 4, ...]
    return lista_final
}

// var resultado = MergeSortList(lista)
var resultado = MergeSortList(lista)

console.log(lista)

console.log(resultado)