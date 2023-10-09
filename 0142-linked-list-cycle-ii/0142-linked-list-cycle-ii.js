/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let visitMap = new Map(); 
    while(head !== null) {
        if(visitMap.has(head)) {return head}
        visitMap.set(head)
        head = head.next
    }
    return null
};