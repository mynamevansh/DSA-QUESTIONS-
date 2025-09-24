

public class SingleElement {
    public static void singleElement(int nums[]){
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            largest = Math.max(largest, nums[i]);
        }
        int count[] = new int[largest+1];
        for(int i=0;i<nums.length;i++){
            count[nums[i]]++;
        }
        int element=-1;
        for(int i=0;i<count.length;i++){
            if (count[i]==1) {
                element= i;
                break;
            }
        }
        System.out.println("the single element is:"+element);
    }
    public static void main(String args[]){
        int nums[]={1};
        singleElement(nums);
    }
}
