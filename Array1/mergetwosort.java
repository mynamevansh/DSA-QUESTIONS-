//Question link {https://leetcode.com/problems/merge-sorted-array/description/}

public class mergetwosort {

    public static void merge(int[] nums1, int m, int[] nums2, int n){
        int ind = nums1.length-1;
        while (m>0 && n>0) {
            if (nums1[m-1]>=nums2[n-1]) {
                nums1[ind]=nums1[m-1];
                m--;
                ind--;
            }
            else{
                nums1[ind--]=nums2[n-1];
                n--;
            }
        }
        while (n>0) {
            nums1[ind--]=nums2[n-1];
                n--;
        }
    }
    public static void main (String args[]){
        int[] nums1 = {1,2,3,0,0,0};
        int[] nums2 = {2,5,6};
        int m = 3;
        int n = 3;
        merge(nums1,m,nums2,n);
        
        
        System.out.print("Merged array: ");
        for(int i = 0; i < nums1.length; i++) {
            System.out.print(nums1[i] + " ");
        }
        System.out.println();
    }
}