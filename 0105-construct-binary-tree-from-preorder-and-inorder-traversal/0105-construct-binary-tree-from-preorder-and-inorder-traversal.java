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
    int preorderIndex=0;
    HashMap<Integer,Integer> map=new HashMap<>();
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for(int i=0;i<inorder.length;i++){
            map.put(inorder[i],i);
        }
        return dfs(preorder,0,inorder.length-1);
    }
    private TreeNode dfs(int[] preorder,int left,int right){
        if(left>right){
            return null;
        }
        TreeNode root=new TreeNode(preorder[preorderIndex]);
        preorderIndex++;
        int mid=map.get(root.val);

        root.left=dfs(preorder,left,mid-1);
        root.right=dfs(preorder,mid+1,right);

        return root;

    }
}