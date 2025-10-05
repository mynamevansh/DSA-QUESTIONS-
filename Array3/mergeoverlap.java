//Question link {https://leetcode.com/problems/merge-intervals/description/}

package Array3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class mergeoverlap {
    public static int[][] merge(int[][] intervals){
        Arrays.sort(intervals,(a,b)-> Integer.compare(a[0], b[0])) ;
        List<int[]> merged = new ArrayList<>();

        for(int[] interval : intervals){
            if (merged.isEmpty() || merged.get(merged.size()-1)[1]<interval[0]) {
                merged.add(interval);
            }
            else{
                merged.get(merged.size()-1)[1] = Math.max(merged.get(merged.size()-1)[1],interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
    public static void main(String args[]){
        int [][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int [][] result = merge(intervals);

        for(int[] interval: result){
            System.out.print(Arrays.toString(interval));
        }
    }
}
