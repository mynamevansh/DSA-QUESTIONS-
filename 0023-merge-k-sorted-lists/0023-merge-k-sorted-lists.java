/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq=new PriorityQueue<>((a,b)->a.val-b.val);
        for(ListNode Node:lists){
            if(Node!=null){
                pq.offer(Node);
            }
        }
        ListNode dummy=new ListNode(-1);
        ListNode temp=dummy;

        while(!pq.isEmpty()){
            ListNode node=pq.poll();
            temp.next=node;
            temp=temp.next;
            if(node.next!=null){
                pq.offer(node.next);
            }
        }
        return dummy.next;
    }
}