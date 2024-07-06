// implementando uma fila em JavaScript

// --------------- CLASSE DE FILA --------------------

class Fila  {
    constructor () {
        this.elements = []
    }

    enfileirar(item) {
        // adiciona elementos ao fim do array
        this.elements.push(item)
    }

    desenfileirar() {
        // remove o primeiro elemento de um array
        this.elements.shift()
    }

    very_fila_vazia() {
        if (!this.elements.length) {
            console.log("A fila está vazia!")
            return false
        } else {
            console.log("A fila está povoada!")
            return true
        }
    }

    pesquisar_elementos_fila(item) {
        // percorre a fila
        if (item in this.elements) {
            // retorna o index com base no elemento passado
            console.log(`Item ${item} encontrado na fila na posição ${this.elements.indexOf(item)}!`)
        } else {
            console.log("Elemento não encontrado na fila!")
        }
    }

    medir_fila() {
        if (this.very_fila_vazia()) {
            console.log(`A fila possui ${this.elements.length} elementos!`)
        }
    }

    exibir_fila() {
        console.log("Fila: ", this.elements)
    }

}

// criar uma instância de nossa classe fila
const obj = new Fila()

const tam_fila = 20

for (let i = 0; i <= tam_fila; i++) {
    obj.enfileirar(i)
}

obj.exibir_fila()

obj.desenfileirar()

obj.exibir_fila()

obj.pesquisar_elementos_fila(18)

obj.very_fila_vazia()

obj.medir_fila()