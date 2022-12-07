// /* Singly-linked list. */
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }


// function crearNuevoNodo(val:number):ListNode{
//     let nuev = new ListNode();
//     nuev.val = val;
//     nuev.next = null;
//     return nuev;
// }


// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null):ListNode | null {
//     const aux:ListNode = new ListNode();

//     function recorrerLista(li1:ListNode, li2:ListNode){
//         if (li1.val < li2.val){
//             if (aux.val === 0){
//                 aux.val = li1.val;
//                 list1.val = list1?.next?.val;
//             }else{
//                 aux.next(crearNuevoNodo());
//             }
//         }
//     }
// };