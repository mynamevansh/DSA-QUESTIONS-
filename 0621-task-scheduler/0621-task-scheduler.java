class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] count=new int[26];
        for(int task:tasks){
            count[task-'A']++;
        }

        PriorityQueue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
        for(int freq:count){
            if(freq>0){
                pq.offer(freq);
            }
        }

        Queue<int[]> q=new LinkedList<>();
        int time=0;
        while(!pq.isEmpty() || !q.isEmpty()){
            time++;
            if(!q.isEmpty() && q.peek()[1]==time){
                pq.offer(q.poll()[0]);
            }

            if(!pq.isEmpty()){
                int freq=pq.poll();
                freq--;
                
                if(freq>0){
                    q.offer(new int[]{freq,time+n+1});
                }
            }
        }
        return time;
    }
}