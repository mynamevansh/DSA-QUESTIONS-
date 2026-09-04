class Solution {
    public int firstStableIndex(int[] nums, int k) {
        int n=nums.length;
        int max=nums[0];

        int[] minSuffix=new int[n];
        minSuffix[n-1]=nums[n-1];
        int min=minSuffix[n-1];
        for(int i=n-2;i>=0;i--){
            min=Math.min(min,nums[i]);
            minSuffix[i]=min;
        }

        for(int i=0;i<n;i++){
            max=Math.max(max,nums[i]);
            if(max-minSuffix[i]<=k){
                return i;
            }
        }
        return -1;
    }
}