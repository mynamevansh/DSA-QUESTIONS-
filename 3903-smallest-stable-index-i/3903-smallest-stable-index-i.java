class Solution {
    public int firstStableIndex(int[] nums, int k) {
        for(int i=0;i<nums.length;i++){
        
            int max=Integer.MIN_VALUE;    
            for(int j=0;j<=i;j++){
                max=Math.max(max,nums[j]);
            }

            int min=Integer.MAX_VALUE;
            for(int m=i;m<nums.length;m++){
                min=Math.min(min,nums[m]);
            }

            int instablity=max-min;
            if(instablity<=k){
                return i;
            }
        }
        return -1;
    }
}