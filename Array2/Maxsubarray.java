//Question link{https://leetcode.com/problems/maximum-subarray/}

package Array2;
public class Maxsubarray {
    public static int maxSubArray(int[] nums){
        int sum = nums[0];
        int max = nums[0];
        for(int i=0;i<nums.length;i++){
            sum=Math.max(nums[i],sum+nums[i]);
            max=Math.max(max, sum);
        }
        return max;
    }
    public static void main(String args[]){
        int [] nums={-2,1,-3,4,-1,2,1,-5,4};
        System.out.println(maxSubArray(nums));
    }
}
//---------------------------------------------------------------------------
//(but what happen if all the elements in the array are negative????)

/* 
package Array2;

public class axsubarray {
    public static int maxSubArray(int[] nums){
        int sum = nums[0];
        int max = nums[0];
        for(int i=0;i<nums.length;i++){
            sum=Math.max(nums[i],sum+nums[i]);
            max=Math.max(max, sum);
        }
        return max;
    }
    public static void main(String args[]){
        int [] nums={-2,1,-3,4,-1,2,1,-5,4};
        System.out.println(maxSubArray(nums));
    }
}

*/