/**
 * Big O notation for each operation 
 * PrintList : O(n)
 * getHEad : O(1)
 * getTail: O(1)
 * getLength: O(1)
 * makeEmpty: O(1)
 * Push: O(1)
 * Pop: O(n)
 * 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    var temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      console.log(i);
      temp = temp.next;
    }
    return temp;
  }
  // Changing the existing value by navigating to that particular node.
  set(index, value) {
    let insertionNode = this.get(index);
    if (insertionNode) {
      insertionNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    let curr = this.get(index);
    let prev = this.get(index - 1);

    prev.next = curr.next;
    this.length--;
    return curr;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
  findMiddleNode() {
    // let count=0, mid, currpt = this.head;
    // while(currpt !== null) {
    // 	currpt = currpt.next
    // 	count+=1;
    // }
    // currpt = this.head;
    // for (let i = 0; i < parseInt(count/2); i++) {
    // 	currpt = currpt.next;
    // }
    // return currpt
    let slow = this.head,
      fast = this.head,
      count = 0;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      console.log(`Iteration ${count} Slow ********, ${slow.value}`);
      fast = fast.next.next;
      console.log(`Iteration ${count} Fast ********, ${fast.value}`);
      count++;
    }
    return slow;
  }
}

// function test() {
let myLinkedList = new LinkedList(2);
myLinkedList.push(1);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(77);
myLinkedList.push(99);
// myLinkedList.set(3,22222)
// myLinkedList.insert(0,10)
// console.log("After Insert ....... ")
myLinkedList.printList();
// myLinkedList.remove(0,10)
// console.log("After Remove ....... ")
// myLinkedList.printList()
// console.log("Before reverse ....... ")
// myLinkedList.printList()
// myLinkedList.reverse()
// console.log("After reverse ....... ")
// myLinkedList.printList()
// console.log("Middle Element .......")
myLinkedList.findMiddleNode();
// console.log(myLinkedList.head.next)
// // (2) Items in LL - Returns 2 Node
// if (myLinkedList.length !== 0) {
//     console.log(myLinkedList.shift().value);
// } else {
//     console.log("null");
// }

// // (1) Item in LL - Returns 1 Node
// if (myLinkedList.length !== 0) {
//     console.log(myLinkedList.shift().value);
// } else {
//     console.log("null");
// }

// // (0) Items in LL - Returns null
// if (myLinkedList.length !== 0) {
//     console.log(myLinkedList.shift().value);
// } else {
//     console.log("null");
// }

//  }

// test();

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
