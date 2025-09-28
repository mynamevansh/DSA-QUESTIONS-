package Array2;

public class Sortcolors {
    public static void sortColors(int[] nums){
        int lower = 0, mid = 0, high = nums.length - 1;
        
        while (mid <= high) {
            if (nums[mid] == 0) {
                int temp = nums[lower];
                nums[lower] = nums[mid];
                nums[mid] = temp;
                lower++;
                mid++;
            }
            else if (nums[mid] == 1) {
                mid++;
            }
            else if (nums[mid] == 2) {
                int temp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = temp;
                high--;
            }
        }
    }
    public static void printarray(int []nums){
        for(int i=0;i<nums.length;i++){
            System.out.print(nums[i]+" ");
        }
    }
    public static void main(String args[]){
        int []nums= {2,0,2,1,1,0};
        sortColors(nums);
        printarray(nums);
    }
}