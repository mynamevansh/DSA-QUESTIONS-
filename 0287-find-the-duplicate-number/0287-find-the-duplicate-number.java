class Solution {
    public int findDuplicate(int[] nums) {
        HashMap<Integer,Integer> map=new HashMap<>();
        int repeatedNo=-1;
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        for(int num:nums){
            if(map.get(num)>1){
                repeatedNo=num;
                break;
            }
        }
        return repeatedNo;
    }
}