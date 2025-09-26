//question link {https://leetcode.com/problems/container-with-most-water/description/}
//NOTE: This is the follow up question of trapped rainwater
package Array2;

public class trappedrainwater {
    public static int maxArea(int[] height){
        int left = 0;
        int right = height.length-1;
        int max = 0;
        while (left<right) {
            int area = (right-left)*Math.min(height[left], height[right]);
            max = Math.max(max, area);
            
            if (height[left]<height[right]) {
                left++;
            }
            else{
                right--;
            }
        }
        return max;

    }
    public static void main(String args[]){
        int [] height = {1,8,6,2,5,4,8,3,7};
        System.out.println(maxArea(height));
    }
}
