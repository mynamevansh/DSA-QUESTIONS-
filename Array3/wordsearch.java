package Array3;

public class wordsearch {
    public boolean exist(char[][] board, String word) {
        int rows=board.length;
        int cols=board[0].length;
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                if (dfs(board,word,i,j,0)) {
                    return true;
                }
            }
        }
        return false;
    }
    private boolean dfs(char[][] board,String word,int row,int col,int index){
        int rows = board.length;
        int cols = board[0].length;
        if (index==word.length()) {
            return true;
        }
        if (row<0 || row>=rows || col<0 || col>=cols || board[row][col]!=word.charAt(index)) {
            return false;
        }
        char temp = board[row][col];
        board[row][col] = '#';

        boolean round = 
        dfs(board, word, row+1, col, index+1) ||
        dfs(board, word, row-1, col, index+1) ||
        dfs(board, word, row, col+1, index+1) ||
        dfs(board, word, row, col-1, index+1) ;

        board[row][col] = temp;
        return round;
    }
    public static void main(String[] args){
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'}, 
            {'A','D','E','E'}
        };
        String word = "ABCCED";
        wordsearch ws = new wordsearch();
        System.out.println(ws.exist(board, word));
    }
}
