

class Queue {
  constructor() {
    this.data = [];
  }
  enQueue(element) {
    this.data.push(element);
  }
  deQueue() {
    if (this.data.length >= 0) {
      return this.data.shift();
    }
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  clear() {
    return (this.data = []);
  }
}

let newQueue = new Queue();
newQueue.enQueue(4);
newQueue.enQueue(5);
newQueue.enQueue(6);
newQueue.enQueue(7);
newQueue.enQueue(8);
console.log('After Enqueue', newQueue.data);
newQueue.deQueue();
console.log('After DeQueue', newQueue.data);
newQueue.isEmpty();
console.log('Peek', newQueue.peek());
console.log('size of the Queue', newQueue.size());
newQueue.clear();
console.log('After Clear', newQueue.data);
