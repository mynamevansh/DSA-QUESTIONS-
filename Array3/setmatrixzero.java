//Question link{https://leetcode.com/problems/set-matrix-zeroes/description/}

package Array3;

public class setmatrixzero {
    public static void setZeroes(int[][] matrix){
        int rows=matrix.length;
        int cols=matrix[0].length;

        boolean firstrow=false;
        boolean firstcols=false;

        for(int i=0;i<rows;i++){
            if (matrix[i][0]==0) {
                firstcols=true;
                break;
            }
        }
        for(int j=0;j<cols;j++){
            if (matrix[0][j]==0) {
                firstrow=true;
                break;
            }
        }
        for(int i=1;i<rows;i++){
            for(int j=1;j<cols;j++){
                if (matrix[i][j]==0) {
                    matrix[i][0]=0;
                    matrix[0][j]=0;
                }
            }
        }
        for(int i=1;i<rows;i++){
            for(int j=1;j<cols;j++){
                if (matrix[i][0]==0 || matrix[0][j]==0) {
                    matrix[i][j]=0;
                }
            }
        }
        if (firstrow) {
            for(int j=0;j<cols;j++){
                matrix[0][j]=0;
            }
        }
        if (firstcols) {
            for(int i=0;i<rows;i++){
                matrix[i][0]=0;
            }
        }
    }
    public static void main(String args[]){
        int[][] matrix={{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(matrix);
    }
}
