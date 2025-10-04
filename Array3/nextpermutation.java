package Array3;
import java.util.Arrays;

public class nextpermutation {
    public static void nextPermutation(int[] nums){
        int n=nums.length;
        int pivot=-1;
        for(int i=n-2;i>=0;i--){
            if (nums[i]<nums[i+1]) {
                pivot=i;
                break;
            }
        }
        if (pivot==-1) {
            reverse(nums,0,n-1);
            return;
        }
        for(int i=n-1;i>pivot;i--){
            if (nums[pivot]<nums[i]) {
                swap(nums,i,pivot);
                break;
            }
        }
        reverse(nums,pivot+1,n-1);
    }
    private static void swap(int []nums , int i,int j){
        int temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
    }
    private static void reverse(int []nums, int left, int right){
        while (left<=right) {
            swap(nums,left,right);
            left++;
            right--;
        }
    }
    public static void main(String args[]){
        int[] nums = {1,2,3};
        nextPermutation(nums);
        System.out.println(Arrays.toString(nums));
    }
}
