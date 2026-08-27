class Solution {
    public int thirdMax(int[] nums) {
        PriorityQueue<Integer> pq=new PriorityQueue<>();
        for(int num:nums){
            if(pq.contains(num)){
                continue;
            }
            pq.offer(num);

            if(pq.size()>3){
                pq.poll();
            }
        }
        if(pq.size()<3){
            return Collections.max(pq);
        }
        return pq.peek();
    }
}