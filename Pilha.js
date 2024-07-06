// CRIANDO UMA PILHA EM JAVASCRIPT

class Pilha {
    constructor () {
        this.elements = []
    }

    enpilhar(item) {
        this.elements.push(item)
    }

    // remove o último elemento da pilha
    desenpilhar() {
        this.elements.pop()
    }

    verify_pilha_vazia() {
        if (!this.elements) {
            console.log("A pilha está vazia!")
        } else {
            console.log("A pilha está povoada!")
        }
    }

    pesquisar_pilha(item) {
        if (item in this.elements) {
            console.log(`O elemento ${item} foi encontrado na posição ${this.elements.indexOf(item)}!`)
        }
    }

    exibir_pilha() {
        console.log("Pilha: ", this.elements)
    }
}


// criando instância da nossa classe pilha
const obj =  new Pilha()

const tam_pilha = 20

for (let i = 0; i <= tam_pilha; i++) {
    obj.enpilhar(i)
}

obj.exibir_pilha()

obj.desenpilhar()

obj.exibir_pilha()