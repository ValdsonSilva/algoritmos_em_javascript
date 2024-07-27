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
        // retorna todos os elementos que sejam diferentes do elemento passado na condição
        console.log(this.elements.filter((element) => element !== element_with_priority))
        // return `Lista atual ${this.elements} e o elemento removido ${element_with_priority}`

    }   

    // verifica se a fila está vazia
    isEmpty() {
        if (this.elements) {
            return `A fila não tá fazia ${true}`
        } else {
            return `A fila não está fazia ${false}`
        }
    }

    // Retorna o tamanho da fila
    size() {
        return `O tamanho da fila ${this.elements.length}`
    }

    printQueue() {
        console.log(`Fila de prioridades: ${this.elements.map((item) => `\n{\n\telement:${item.element},\n\tpriority:${item.priority}\n}`)}`)
    }
}


// intância da minha classe
const pq = new PriorityQueue();

pq.enqueue("Tarefa 1", 2);
pq.enqueue("Tarefa 2", 1);
pq.enqueue("Tarefa 3", 3);

console.log(pq.printQueue()); // [ { element: 'Tarefa 2', priority: 1 }, { element: 'Tarefa 1', priority: 2 }, { element: 'Tarefa 3', priority: 3 } ]
console.log(pq.dequeue()); // { element: 'Tarefa 2', priority: 1 }
console.log(pq.front()); // { element: 'Tarefa 1', priority: 2 }
console.log(pq.isEmpty()); // false
console.log(pq.size()); // 2
