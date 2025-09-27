// DSA Algorithms - JavaScript Implementation
// Performance optimized with monitoring

class DSAAlgorithms {
    // Boyer-Moore Majority Vote Algorithm
    static majorityElement(nums) {
        let candidate = nums[0];
        let count = 1;
        
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === candidate) {
                count++;
            } else {
                count--;
                if(count === 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
    }

    // Trapped Rainwater - Two Pointer Approach
    static trappedRainwater(height) {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let water = 0;
        
        while(left < right) {
            if(height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
                right--;
            }
        }
        return water;
    }

    // Kadane's Algorithm - Maximum Subarray
    static maxSubarray(nums) {
        let maxSum = nums[0];
        let currentSum = nums[0];
        
        for(let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    // Search in 2D Matrix
    static search2DMatrix(matrix, target) {
        if(!matrix.length || !matrix[0].length) return false;
        
        let row = 0;
        let col = matrix[0].length - 1;
        
        while(row < matrix.length && col >= 0) {
            if(matrix[row][col] === target) return true;
            else if(matrix[row][col] > target) col--;
            else row++;
        }
        return false;
    }

    // Buy/Sell Stocks - Single Pass
    static maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        
        for(let i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
        return maxProfit;
    }

    // Power Function with Negative Handling
    static myPow(x, n) {
        if(n === 0) return 1;
        
        let N = Math.abs(n);
        let result = 1;
        
        while(N > 0) {
            if(N % 2 === 1) {
                result *= x;
            }
            x *= x;
            N = Math.floor(N / 2);
        }
        
        return n < 0 ? 1 / result : result;
    }
}

// Performance Monitor Class
class PerformanceMonitor {
    static measure(algorithmName, fn, input) {
        const startTime = performance.now();
        const result = fn(input);
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(4);
        
        return {
            result: result,
            executionTime: executionTime,
            algorithm: algorithmName
        };
    }
}

// Demo Functions for HTML Interface
function runMajorityElement() {
    const input = [2, 2, 1, 1, 1, 2, 2];
    const performance = PerformanceMonitor.measure(
        'Majority Element',
        DSAAlgorithms.majorityElement,
        input
    );
    
    const resultDiv = document.getElementById('majority-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Input:</strong> [${input.join(', ')}]<br>
        <strong>Majority Element:</strong> ${performance.result}<br>
        <strong>Algorithm:</strong> Boyer-Moore Voting<br>
        <strong>Time Complexity:</strong> O(n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

function runTrappedRainwater() {
    const input = [0,1,0,2,1,0,1,3,2,1,2,1];
    const performance = PerformanceMonitor.measure(
        'Trapped Rainwater',
        DSAAlgorithms.trappedRainwater,
        input
    );
    
    const resultDiv = document.getElementById('rainwater-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Heights:</strong> [${input.join(', ')}]<br>
        <strong>Water Trapped:</strong> ${performance.result} units<br>
        <strong>Algorithm:</strong> Two Pointer<br>
        <strong>Time Complexity:</strong> O(n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

function runMaxSubarray() {
    const input = [-2,1,-3,4,-1,2,1,-5,4];
    const performance = PerformanceMonitor.measure(
        'Maximum Subarray',
        DSAAlgorithms.maxSubarray,
        input
    );
    
    const resultDiv = document.getElementById('subarray-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Array:</strong> [${input.join(', ')}]<br>
        <strong>Maximum Sum:</strong> ${performance.result}<br>
        <strong>Algorithm:</strong> Kadane's Algorithm<br>
        <strong>Time Complexity:</strong> O(n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

function runSearch2D() {
    const matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]];
    const target = 5;
    const performance = PerformanceMonitor.measure(
        'Search 2D Matrix',
        (data) => DSAAlgorithms.search2DMatrix(data.matrix, data.target),
        {matrix, target}
    );
    
    const resultDiv = document.getElementById('search2d-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Matrix:</strong> 4x4 sorted matrix<br>
        <strong>Target:</strong> ${target}<br>
        <strong>Found:</strong> ${performance.result}<br>
        <strong>Algorithm:</strong> Binary Search<br>
        <strong>Time Complexity:</strong> O(m + n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

function runStockProfit() {
    const input = [7,1,5,3,6,4];
    const performance = PerformanceMonitor.measure(
        'Stock Profit',
        DSAAlgorithms.maxProfit,
        input
    );
    
    const resultDiv = document.getElementById('stock-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Prices:</strong> [${input.join(', ')}]<br>
        <strong>Maximum Profit:</strong> $${performance.result}<br>
        <strong>Algorithm:</strong> Single Pass<br>
        <strong>Time Complexity:</strong> O(n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

function runPowerFunction() {
    const x = 2, n = 10;
    const performance = PerformanceMonitor.measure(
        'Power Function',
        (data) => DSAAlgorithms.myPow(data.x, data.n),
        {x, n}
    );
    
    const resultDiv = document.getElementById('power-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Base:</strong> ${x}<br>
        <strong>Exponent:</strong> ${n}<br>
        <strong>Result:</strong> ${performance.result}<br>
        <strong>Algorithm:</strong> Fast Exponentiation<br>
        <strong>Time Complexity:</strong> O(log n)<br>
        <strong>Space Complexity:</strong> O(1)<br>
        <strong>Execution Time:</strong> ${performance.executionTime}ms
    `;
}

// Performance logging
console.log('🚀 DSA Algorithms loaded successfully!');
console.log('📊 Performance monitoring enabled');