Question link{https://leetcode.com/problems/find-missing-and-repeated-values/description/}

public class MissingandRepeated {
    public static int[] missingandrepeated(int grid[][]){
        int n = grid.length;
        int N = n*n;
        boolean seen[] = new boolean[N+1];
        int repeat = -1;
        int missing = -1;

        for(int row[]:grid){
            for(int element:row){
                if (seen[element]) {
                    repeat = element;
                }
                else{
                    seen[element]=true;
                }
            }
        }
        for(int i=1;i<=N;i++){
            if(!seen[i]){
                missing=i;
                break;
            }
        }
        return new int[]{repeat,missing};
    }
    public static void main (String args[]){
        int grid[][] = {{1,3},
                        {3,4}};
        int result[] = missingandrepeated(grid);
        System.out.println("Repeated: " + result[0] + ", Missing: " + result[1]);
    }
}
