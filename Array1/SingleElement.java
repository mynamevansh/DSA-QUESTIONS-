//Question link{https://leetcode.com/problems/single-number/description/}

class Solution {
    public int singleNumber(int[] nums){
        int result = 0;
        for(int i=0;i<nums.length;i++ ){
            result^=nums[i];
        }
        return result;
    }
    public static void main(String args[]){
        int nums[]={4,1,2,1,2};
        Solution sol = new Solution();
        System.out.println(sol.singleNumber(nums));
    }
}
