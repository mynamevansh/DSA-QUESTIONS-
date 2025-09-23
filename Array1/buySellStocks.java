import java.util.*;
public class buySellStocks{
    public static void BuySellStocks(int prices[]){
        int costprice[] = new int[prices.length];
        costprice[0] = prices[0];

        for(int i=1;i<prices.length;i++){
            costprice[i] = Math.min(prices[i],costprice[i-1]); 
        }
        int maxprofit = Integer.MIN_VALUE;
        for(int i=0;i<prices.length;i++){
            int profit = prices[i] - costprice[i];
            
            maxprofit = Math.max(maxprofit,profit);
        }
        System.out.println("maxprofit is:"+maxprofit);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int prices[] = {7,6,4,3,1}; 
        BuySellStocks(prices);
        sc.close();
    }
}