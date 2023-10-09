/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Time O(n) Space O(n)
    // let hash = new Map()
    // while(head !== null) {
    //     if(hash.has(head)) {return true;}
    //     hash.set(head);
    //     head = head.next
    // }
    // return false

    // Time O(n) Space O(1)
    let fast = head 
    while (fast && fast.next !== null) {
        head = head.next; 
        fast = fast.next.next; 
        if (head === fast) return true;
    }
    return false
};