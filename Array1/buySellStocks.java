//Question link {https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/}


import java.util.*;
public class buySellStocks{
    public static int BuySellStocks(int prices[]){
        int minprice=prices[0];
        int maxprofit=0;
        for(int price:prices){
            minprice=Math.min(minprice,price);
            maxprofit=Math.max(maxprofit,price-minprice);
        }
        return maxprofit;
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int prices[] = {7,6,4,3,1}; 
        int maxprofit=BuySellStocks(prices);
        System.out.println("maxprofit is:"+maxprofit);
        sc.close();
    }
}
