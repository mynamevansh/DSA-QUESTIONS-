class Solution {
    public boolean uniformArray(int[] nums1) {
        int n=nums1.length;
        

        Arrays.sort(nums1);
        int smallest=nums1[0];
        
        
        if(smallest%2==0){
            for(int i=1;i<n;i++){
                if(nums1[i]%2!=0){
                    return false;
                }
            }
            return true;
        }
        return true;
    }
}