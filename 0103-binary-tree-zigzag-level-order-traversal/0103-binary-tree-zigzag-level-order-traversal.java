/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> ans=new ArrayList<>();
        if(root==null){
            return ans;
        }
        boolean leftToRight=true;
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);
        while(!q.isEmpty()){
            List<Integer> list=new ArrayList<>();
            int size=q.size();
            for(int i=0;i<size;i++){
                TreeNode node=q.poll();
                if(leftToRight){
                    list.addLast(node.val);
                }else{
                    list.addFirst(node.val);
                }
                if(node.left!=null){
                    q.offer(node.left);
                }
                if(node.right!=null){
                    q.offer(node.right);
                }
            }
            ans.add(list);
            leftToRight=!leftToRight;
        }
        return ans;
    }
}