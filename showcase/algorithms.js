class DSAAlgorithms {
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

    static maxSubarray(nums) {
        let maxSum = nums[0];
        let currentSum = nums[0];
        
        for(let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

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

    static maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        
        for(let i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
        return maxProfit;
    }

    static sortColors(nums) {
        let lower = 0, mid = 0, high = nums.length - 1;
        const result = [...nums];
        
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

    static singleNumber(nums) {
        let result = 0;
        for(let num of nums) {
            result ^= num;
        }
        return result;
    }

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

    static nextPermutation(nums) {
        const result = [...nums];
        const n = result.length;
        let pivot = -1;
        
        for(let i = n - 2; i >= 0; i--) {
            if(result[i] < result[i + 1]) {
                pivot = i;
                break;
            }
        }
        
        if(pivot === -1) {
            result.reverse();
            return result;
        }
        
        for(let i = n - 1; i > pivot; i--) {
            if(result[pivot] < result[i]) {
                [result[pivot], result[i]] = [result[i], result[pivot]];
                break;
            }
        }
        
        const suffix = result.slice(pivot + 1).reverse();
        return [...result.slice(0, pivot + 1), ...suffix];
    }

    static mergeIntervals(intervals) {
        if (!intervals.length) return [];
        
        intervals.sort((a, b) => a[0] - b[0]);
        const merged = [intervals[0]];
        
        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const lastMerged = merged[merged.length - 1];
            
            if (current[0] <= lastMerged[1]) {
                lastMerged[1] = Math.max(lastMerged[1], current[1]);
            } else {
                merged.push(current);
            }
        }
        
        return merged;
    }

    static longestSubstring(s) {
        const charSet = new Set();
        let left = 0, right = 0, maxLength = 0;
        
        while (right < s.length) {
            const char = s[right];
            
            while (charSet.has(char)) {
                charSet.delete(s[left]);
                left++;
            }
            
            charSet.add(char);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }
        
        return maxLength;
    }
}

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
function runMajorityElement() {
    try {
        const input = [2, 2, 1, 1, 1, 2, 2];
        const performance = PerformanceMonitor.measure(
            'Majority Element',
            DSAAlgorithms.majorityElement,
            input
        );
        
        const resultDiv = document.getElementById('majority-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${input.join(', ')}]<br>
                <strong>Output:</strong> ${performance.result}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runMajorityElement:', error);
    }
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
    try {
        const input = [2,0,2,1,1,0];
        const performance = PerformanceMonitor.measure(
            'Sort Colors',
            DSAAlgorithms.sortColors,
            input
        );
        
        const resultDiv = document.getElementById('sortcolors-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${input.join(', ')}]<br>
                <strong>Sorted:</strong> [${performance.result.join(', ')}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runSortColors:', error);
    }
}

function runSingleElement() {
    try {
        const input = [4,1,2,1,2];
        const performance = PerformanceMonitor.measure(
            'Single Element',
            DSAAlgorithms.singleNumber,
            input
        );
        
        const resultDiv = document.getElementById('single-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Array:</strong> [${input.join(', ')}]<br>
                <strong>Unique:</strong> ${performance.result}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runSingleElement:', error);
    }
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

function runNextPermutation() {
    try {
        const input = [1, 2, 3];
        const performance = PerformanceMonitor.measure(
            'Next Permutation',
            DSAAlgorithms.nextPermutation,
            input
        );
        
        const resultDiv = document.getElementById('nextperm-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${input.join(', ')}]<br>
                <strong>Next:</strong> [${performance.result.join(', ')}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runNextPermutation:', error);
    }
}

function runMergeIntervals() {
    try {
        const input = [[1,3],[2,6],[8,10],[15,18]];
        const performance = PerformanceMonitor.measure(
            'Merge Intervals',
            DSAAlgorithms.mergeIntervals,
            input
        );
        
        const resultDiv = document.getElementById('mergeintervals-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const inputStr = input.map(arr => `[${arr.join(',')}]`).join(',');
            const outputStr = performance.result.map(arr => `[${arr.join(',')}]`).join(',');
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${inputStr}]<br>
                <strong>Merged:</strong> [${outputStr}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runMergeIntervals:', error);
    }
}

function runLongestSubstring() {
    try {
        const input = "abcabcbb";
        const performance = PerformanceMonitor.measure(
            'Longest Substring',
            DSAAlgorithms.longestSubstring,
            input
        );
        
        const resultDiv = document.getElementById('longestsubstr-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>String:</strong> "${input}"<br>
                <strong>Length:</strong> ${performance.result}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runLongestSubstring:', error);
    }
}

console.log('🚀 DSA Algorithms loaded successfully!');
console.log('📊 Performance monitoring enabled');

class WebPerformanceMonitor {
    static logPageLoadMetrics() {
        window.addEventListener('load', function() {
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
                
                window.performanceMetrics = metrics;
            }, 0);
        });
    }
}

WebPerformanceMonitor.logPageLoadMetrics();
function toggleCard(cardId) {
    const card = document.querySelector(`#${cardId}-back`).parentElement;
    card.classList.toggle('flipped');
    
    // Close result if open when flipping back
    if (!card.classList.contains('flipped')) {
        const result = document.getElementById(`${cardId}-result`);
        if (result) {
            result.classList.remove('visible');
            result.innerHTML = '';
        }
    }
}