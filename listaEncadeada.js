// --------------LISTA ENCADEADA EM JAVASCRIPT------------------

// modelo base de nós de uma lista encadeada
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

/* 
    Passo 2: Criar uma classe para a lista encadeada
    A classe da lista encadeada vai gerenciar os nós. 
    Vamos criar uma classe LinkedList que terá métodos para adicionar, 
    remover e percorrer os nós.
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Método para adicionar um nó no final da lista ([1,->2],[2,null])
    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode
        }
        this.size++;
    }

    // Método para remover um nó "específico" da lista
    remove(value) {
        // inicializando com a cabeça da minha lista
        let current = this.head;
        // referência ao elemento anterior ao atual
        let previos = null;

        while (current !== null) {
            if (current.value === value) {
                // significa que o elemento encontrado é a cabeça da lista
                if (previos === null) {
                    // a cabeça da lista recebe o next element do current element
                    this.head = current.next
                } else {
                    previos.next = current.next
                }
            } 
            // o previos element recebe o current element
            previos = current;
            // o current element recebe o next element
            current =  current.next;
        }
    }

    // Método para verificar se a lista contém um valor específico
    contains(value) {
        // acessa a cabeça da minha linkedList
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return `O elemento encontrado é ${current.value}!`;
            }
            current = current.next;
        }
        return `O elemento ${value} não foi encontrado!`;
    }
    
    // Método para imprimir todos os valores da lista
    print() {
        // acessando a cabeça da minha lista encadeada
        let current = this.head;
        let values = [];

        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}   

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.print(); // Saída: 1 -> 2 -> 3

console.log(list.contains(2)); // Saída: true
console.log(list.contains(4)); // Saída: false

list.remove(2);
list.print(); // Saída: 1 -> 3