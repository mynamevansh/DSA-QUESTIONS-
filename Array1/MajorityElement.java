Question link{https://leetcode.com/problems/majority-element/description/}

package Array1;
import java.util.*;
public class MajorityElement{
    public static void Majority(int nums[]){
        int element = nums.length/2;
        int majorityElement = -1;

        int largest = Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            largest = Math.max(nums[i], largest);
        }
        int count[] = new int[largest+1];

        for(int i=0;i<nums.length;i++){
            count[nums[i]]++;
        }

        for(int i=0;i<count.length;i++){
            if (count[i]>element) {
                majorityElement = i;
                break;
            }
        }
        System.out.println("then majorityElement is:"+majorityElement);

    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int nums[] = {2,2,1,1,1,2,2};
        Majority(nums);
        sc.close();
    }
    
}
