//Question link {https://leetcode.com/problems/two-sum/submissions/1790847430/}

package Array2;

import java.util.HashMap;

public class twosum {
    public static int[] twoSum(int[] nums, int target){
        HashMap<Integer,Integer> map = new HashMap<>();

        for(int i=0;i<nums.length;i++){
            int first = i;
            int second = target-nums[first];

            if (map.containsKey(second)) {
                return new int[] {map.get(second),first};
            }
            map.put(nums[first],i);
        }
        return new int[] {};
    }
    public static void main(String args[]){
        int [] nums = {2,7,11,15};
        int target = 9;
        int [] result = twoSum(nums,target);
        System.out.println("("+result[0]+","+result[1]+")");
    }
}
