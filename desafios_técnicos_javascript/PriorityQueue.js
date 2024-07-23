// Desafio: Implementar uma Fila com Prioridade (Priority Queue) em JavaScript

/*
Uma Fila com Prioridade é uma estrutura de dados onde cada elemento tem uma prioridade associada, 
e os elementos com prioridades mais altas são removidos da fila antes dos 
elementos com prioridades mais baixas.
*/

class PriorityQueue {
    constructor () {
        this.elements = []
    }

    // adiciona o elemento juntamente com suas propriedades
    enqueue(element, priority) {
        this.elements.push({element:element, priority: priority})
    }

    // retorna o elemento com a maior prioridade
    front() {
        let prioridade = 0
        let elemento = null

        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i].priority > prioridade) {
                prioridade = this.elements[i].priority
                elemento = this.elements[i]
            }
        }

        return elemento
    }

    // remove e retorna o eleemento com maior prioridade da fila
    dequeue() {
    
        var element_with_priority = this.front()
        console.log("Elemento de maior prioridade: ", element_with_priority)
        console.log(this.elements.filter((arr) => arr !== element_with_priority))
        // return `Lista atual ${this.elements} e o elemento removido ${element_with_priority}`

    }   

    print() {
        console.log(`Fila de prioridades: ${this.elements.map((item) => `\n{\n\telement:${item.element},\n\tpriority:${item.priority}\n}`)}`)
    }
}


// intância da minha classe
const obj = new PriorityQueue()
const tam = 10

for (let i = 1; i <= tam; i++) {
    obj.enqueue(3 * Math.random(), 2 * (Math.random()/(2)))
}

obj.print()

console.log(obj.front())

// console.log(obj.dequeue())
obj.dequeue()

// obj.print()