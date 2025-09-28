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

    // Sort Colors - Dutch National Flag Algorithm
    static sortColors(nums) {
        let lower = 0, mid = 0, high = nums.length - 1;
        const result = [...nums]; // Copy for visualization
        
        while(mid <= high) {
            if(result[mid] === 0) {
                [result[lower], result[mid]] = [result[mid], result[lower]];
                lower++;
                mid++;
            } else if(result[mid] === 1) {
                mid++;
            } else if(result[mid] === 2) {
                [result[mid], result[high]] = [result[high], result[mid]];
                high--;
            }
        }
        return result;
    }

    // Single Element - XOR Bit Manipulation
    static singleNumber(nums) {
        let result = 0;
        for(let num of nums) {
            result ^= num; // XOR cancels duplicates
        }
        return result;
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Input:</strong> [${input.join(', ')}]<br>
        <strong>Output:</strong> ${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Heights:</strong> [${input.join(', ')}]<br>
        <strong>Water:</strong> ${performance.result} units<br>
        <strong>Time:</strong> ${performance.executionTime}ms
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Array:</strong> [${input.join(', ')}]<br>
        <strong>Max Sum:</strong> ${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Target:</strong> ${target}<br>
        <strong>Found:</strong> ${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Prices:</strong> [${input.join(', ')}]<br>
        <strong>Profit:</strong> $${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
    `;
}

function runSortColors() {
    const input = [2,0,2,1,1,0];
    const performance = PerformanceMonitor.measure(
        'Sort Colors',
        DSAAlgorithms.sortColors,
        input
    );
    
    const resultDiv = document.getElementById('sortcolors-result');
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Input:</strong> [${input.join(', ')}]<br>
        <strong>Sorted:</strong> [${performance.result.join(', ')}]<br>
        <strong>Time:</strong> ${performance.executionTime}ms
    `;
}

function runSingleElement() {
    const input = [4,1,2,1,2];
    const performance = PerformanceMonitor.measure(
        'Single Element',
        DSAAlgorithms.singleNumber,
        input
    );
    
    const resultDiv = document.getElementById('single-result');
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Array:</strong> [${input.join(', ')}]<br>
        <strong>Unique:</strong> ${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
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
    resultDiv.className = 'result visible';
    resultDiv.innerHTML = `
        <strong>Base:</strong> ${x}<br>
        <strong>Exponent:</strong> ${n}<br>
        <strong>Result:</strong> ${performance.result}<br>
        <strong>Time:</strong> ${performance.executionTime}ms
    `;
}

// Performance logging and monitoring
console.log('🚀 DSA Algorithms loaded successfully!');
console.log('📊 Performance monitoring enabled');

// Web Performance Monitoring
class WebPerformanceMonitor {
    static logPageLoadMetrics() {
        window.addEventListener('load', function() {
            // Wait for all resources to load
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const paintEntries = performance.getEntriesByType('paint');
                
                const metrics = {
                    'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
                    'TCP Connect': perfData.connectEnd - perfData.connectStart,
                    'TTFB (Time to First Byte)': perfData.responseStart - perfData.requestStart,
                    'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.navigationStart,
                    'Full Page Load': perfData.loadEventEnd - perfData.navigationStart,
                    'First Paint': paintEntries.find(p => p.name === 'first-paint')?.startTime || 'N/A',
                    'First Contentful Paint': paintEntries.find(p => p.name === 'first-contentful-paint')?.startTime || 'N/A'
                };
                
                console.group('📈 Performance Metrics');
                Object.entries(metrics).forEach(([key, value]) => {
                    const time = typeof value === 'number' ? `${value.toFixed(2)}ms` : value;
                    console.log(`${key}: ${time}`);
                });
                console.groupEnd();
                
                // Store metrics for Lighthouse comparison
                window.performanceMetrics = metrics;
            }, 0);
        });
    }
}

// Initialize performance monitoring
WebPerformanceMonitor.logPageLoadMetrics();

// Card flip functionality for interactive flashcards
function toggleCard(cardId) {
    const card = document.querySelector(`#${cardId}-back`).parentElement;
    card.classList.toggle('flipped');
    
    // Close result if open when flipping back
    if (!card.classList.contains('flipped')) {
        const result = document.getElementById(`${cardId}-result`);
        if (result) {
            result.style.display = 'none';
            result.innerHTML = '';
        }
    }
}