class Stack {
  constructor() {
    this.top = 0;
    this.data = [];
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }
  peek() {
    return this.data[this.top - 1];
  }

  print() {
    let traverse = this.top - 1;
    while (traverse >= 0) {
      console.log(this.data[traverse]);
      traverse--;
    }
  }
  reverse() {
    let reverseTraverse = 0;
    while (reverseTraverse <= this.top - 1) {
      console.log(this.data[reverseTraverse]);
      reverseTraverse++;
    }
  }
  length() {
    return this.top;
  }
  isEmpty() {
    return this.top === 0;
  }
}

let newStack = new Stack();
newStack.push(4);
newStack.push(5);
newStack.push(6);
newStack.push(7);
console.log('After Push ', newStack.data);
newStack.pop();
console.log('after Pop', newStack.data);
newStack.print();
console.log(newStack.peek());
newStack.print();
newStack.reverse();
newStack.length();
newStack.isEmpty();
