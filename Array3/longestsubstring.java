//Question link {https://leetcode.com/problems/longest-substring-without-repeating-characters/description/}

package Array3;

import java.util.HashSet;
import java.util.Set;

public class longestsubstring {
    public static int lengthOfLongestSubstring(String s){
        Set<Character> set = new HashSet<>();
        int left=0, right=0 , maxlength=0;

        while (right<s.length()) {
            char c = s.charAt(right);

            while (set.contains(c)) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(c);
            maxlength = Math.max(maxlength, right-left+1);
            right++;
        }
        return maxlength;
    }
    public static void main(String args[]){
        String s = "abcabcbb";
        System.out.println(lengthOfLongestSubstring(s));
    }
}
