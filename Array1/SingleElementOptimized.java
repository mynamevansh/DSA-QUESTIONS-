//Question link{https://leetcode.com/problems/single-number/description/}

/**
 * Single Element - Optimized XOR Solution
 * 
 * Original Solution: O(max_value) space, O(n) time
 * Optimized Solution: O(1) space, O(n) time
 * 
 * Key Insight: XOR of identical numbers = 0, XOR with 0 = original number
 * Pattern: a ^ a = 0, a ^ 0 = a
 * 
 * Companies: Google, Microsoft, Meta, Apple
 */
public class SingleElementOptimized {
    
    /**
     * XOR Bit Manipulation - Most Efficient
     * Time: O(n), Space: O(1)
     */
    public static int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;  // XOR cancels out duplicates
        }
        return result;
    }
    
    /**
     * Original counting approach (for comparison)
     * Time: O(n), Space: O(max_value) - INEFFICIENT
     */
    public static int singleElementOriginal(int nums[]) {
        int largest = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            largest = Math.max(largest, nums[i]);
        }
        int count[] = new int[largest + 1];
        for (int i = 0; i < nums.length; i++) {
            count[nums[i]]++;
        }
        int element = -1;
        for (int i = 0; i < count.length; i++) {
            if (count[i] == 1) {
                element = i;
                break;
            }
        }
        return element;
    }
    
    /**
     * Performance testing and comparison
     */
    public static void main(String args[]) {
        // Test cases
        int[][] testCases = {
            {2, 2, 1},                    // Expected: 1
            {4, 1, 2, 1, 2},             // Expected: 4
            {1},                          // Expected: 1
            {1, 3, 2, 3, 1, 5, 2},       // Expected: 5
        };
        
        System.out.println("Single Element - Algorithm Comparison");
        System.out.println("=".repeat(50));
        
        for (int i = 0; i < testCases.length; i++) {
            int[] nums = testCases[i];
            
            System.out.printf("Test %d: %s%n", i + 1, java.util.Arrays.toString(nums));
            
            // XOR approach (optimal)
            long start = System.nanoTime();
            int resultXOR = singleNumber(nums);
            long xorTime = System.nanoTime() - start;
            
            // Original approach (for comparison)
            start = System.nanoTime();
            int resultOriginal = singleElementOriginal(nums);
            long originalTime = System.nanoTime() - start;
            
            System.out.printf("XOR Result: %d (Time: %d ns, Space: O(1))%n", resultXOR, xorTime);
            System.out.printf("Original Result: %d (Time: %d ns, Space: O(max_value))%n", resultOriginal, originalTime);
            System.out.printf("Status: %s%n", (resultXOR == resultOriginal) ? "✓ PASS" : "✗ FAIL");
            System.out.println();
        }
        
        // Large array performance test
        System.out.println("Performance Test - Large Array (n=100,001):");
        int[] largeArray = createLargeTestArray(100001);
        
        long start = System.nanoTime();
        int xorResult = singleNumber(largeArray);
        long xorTime = System.nanoTime() - start;
        
        start = System.nanoTime();
        int originalResult = singleElementOriginal(largeArray);
        long originalTime = System.nanoTime() - start;
        
        System.out.printf("XOR O(1) space: %d result, %d ms%n", xorResult, xorTime / 1_000_000);
        System.out.printf("Array O(max) space: %d result, %d ms%n", originalResult, originalTime / 1_000_000);
        System.out.printf("XOR is %.2fx faster and uses constant space!%n", (double) originalTime / xorTime);
    }
    
    private static int[] createLargeTestArray(int size) {
        int[] arr = new int[size];
        int unique = 42; // The single element
        
        // Fill pairs
        for (int i = 0; i < size - 1; i += 2) {
            int value = i / 2 + 1;
            arr[i] = value;
            arr[i + 1] = value;
        }
        
        // Add single element
        arr[size - 1] = unique;
        
        // Shuffle
        for (int i = 0; i < size; i++) {
            int j = (int) (Math.random() * size);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        return arr;
    }
}