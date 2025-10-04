//Question link{https://leetcode.com/problems/find-missing-and-repeated-values/description/}

import java.util.HashMap;

public class MissingandRepeated {
    public static int[] missingandrepeated(int grid[][]){
        HashMap<Integer,Boolean> map = new HashMap<>();
        int repeated = -1;
        int missing = -1;
        int n = grid.length;
        for(int[] num : grid){
            for(int element : num){
                if (map.containsKey(element)) {
                    repeated = element;
                }
                else{
                    map.put(element, true);
                }
            }
        }
        for(int i=1;i<=n*n;i++){
            if (!map.containsKey(i)) {
                missing = i;
                break;
            }
        }
        return new int[] {repeated ,missing};
        
    }
    public static void main (String args[]){
        int grid[][] = {{1,3},
                        {2,2}};
        int result[] = missingandrepeated(grid);
        System.out.println("Repeated: " + result[0] + ", Missing: " + result[1]);
    }
}
