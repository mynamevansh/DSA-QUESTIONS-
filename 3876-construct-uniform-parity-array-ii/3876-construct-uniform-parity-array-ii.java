class Solution {
    public boolean uniformArray(int[] nums1) {
        int n=nums1.length;
        int[] nums2=new int[n];

        Arrays.sort(nums1);
        int smallest=nums1[0];
        nums2[0]=smallest;
        
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