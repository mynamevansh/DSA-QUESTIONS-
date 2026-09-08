class Solution {
    public int countCommas(int n) {
        int count;
        if(n>=1000){
            count=n-1000+1;
        }else{
            return 0;
        }
        return count;
    }
}