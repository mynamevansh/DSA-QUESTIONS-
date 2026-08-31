class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String,Integer> map=new HashMap<>();
        for(String word:words){
            map.put(word,map.getOrDefault(word,0)+1);
        }

        PriorityQueue<String> pq=new PriorityQueue<>(
            (a,b)->{
                int freqA=map.get(a); 
                int freqB=map.get(b);
                if(freqA!=freqB){
                    return freqA-freqB;
                } 
                return b.compareTo(a);
            }
        );
        
        for(String key:map.keySet()){
            pq.offer(key);
            if(pq.size()>k){
                pq.poll();
            }
        }
        List<String> result=new ArrayList<>();
        while(!pq.isEmpty()){
            result.add(pq.poll());
        }

        Collections.reverse(result);
        return result;
    }
}