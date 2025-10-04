import java.util.HashMap;

public class missingnumber {

    public static int missingNumber(int[] nums){
        HashMap<Integer,Boolean> map = new HashMap<>();
        for(int num:nums){
            map.put(num, true);
        }
        for(int i=0;i<=nums.length;i++){
            if (!map.containsKey(i)) {
                return i;
            }
        }
        return -1;
    }
    public static void main(String args[]){
        int[] nums = {3,0,1};
        int result = missingNumber(nums);
        System.out.print("Missing Element is:" + result);
    }
}