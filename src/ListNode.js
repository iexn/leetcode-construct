/** 
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createListNode(list) {
   const result = new ListNode;
   let p = result;

   for (let i = 0; i < list.length; i++) {
       p.next = new ListNode(list[i]);
       p = p.next;
   }

   return result.next;
}