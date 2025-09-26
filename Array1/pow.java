public class pow{
    public static double myPow(double x, int n){
        long N = n;
        if (N==0) {
            return 1.0;
        }
        if (N<0) {
            x=1.0/x;
            N=-N;
        }
        double result = 1.0;
        while (N>0) {
            if (N%2==1) {
                result*=x;
            }
            x=x*x;
            N=N/2;
        }
        return result;
    }
    public static void main(String args[]){
        long n = 10; 
        double x = 2;
        System.out.println(myPow(x, (int)n));
    }
}
