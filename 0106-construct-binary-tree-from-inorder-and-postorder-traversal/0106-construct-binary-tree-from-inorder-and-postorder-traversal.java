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
    int postorderIndex;
    HashMap<Integer,Integer> map=new HashMap<>();
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        postorderIndex=postorder.length-1;
        for(int i=0;i<inorder.length;i++){
            map.put(inorder[i],i);
        }
        return dfs(postorder,0,inorder.length-1);
    }
    private TreeNode dfs(int[] postorder,int left,int right){
        if(left>right){
            return null;
        }
        TreeNode root=new TreeNode(postorder[postorderIndex]);
        postorderIndex--;
        int mid=map.get(root.val);

        root.right=dfs(postorder,mid+1,right);
        root.left=dfs(postorder,left,mid-1);

        return root;
    }
}