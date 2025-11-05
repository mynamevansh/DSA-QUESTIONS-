package Array2;

import java.util.Arrays;

public class twosumpointer {
    public static int[] twoSum(int[] nums, int target){
        Arrays.sort(nums);
        int left=0;
        int right=nums.length-1;
        while (left<right) {
            int sum=nums[left]+nums[right];
            if(sum==target){
                return new int[] {nums[left],nums[right]};
            }
            else if (sum<target) {
                left++;
            }
            else{
                right--;
            }
        }
        return new int[]{};        
    }
    public static void main(String args[]){
        int[] nums={3,2,4};
        int target=6;
        int[] result= twoSum(nums, target);
        if (result.length==2) {
            System.out.println((result[0]+","+result[1]));
        }else{
            System.out.println("no pair");
        }
        
    }
}
