//Question link{https://leetcode.com/problems/find-missing-and-repeated-values/description/}

import java.util.HashMap;

public class MissingandRepeated {
    public static int[] missingandrepeated(int grid[][]){
        HashMap<Integer,Integer> map = new HashMap<>();
        int repeated = -1;
        int missing = -1;
        int n = grid.length;
        for(int[] nums:grid){
            for(int num:nums){
                map.put(num,map.getOrDefault(num, 0)+1);
            }
        }
        for(int i=1;i<=n*n;i++){
            int count=map.getOrDefault(i,0);
            if (count==0) {
                missing=i;
            }
            if (count>1) {
                repeated=i;
            }
        }
        return new int[] {repeated,missing};
        
    }
    public static void main (String args[]){
        int grid[][] = {{1,3},
                        {2,2}};
        int result[] = missingandrepeated(grid);
        System.out.println("Repeated: " + result[0] + ", Missing: " + result[1]);
    }
}
