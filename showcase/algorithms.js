class DSAAlgorithms {
    static twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }

    static threeSum(nums) {
        const result = [];
        nums.sort((a, b) => a - b);
        
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }

    static fourSum(nums, target) {
        const result = [];
        nums.sort((a, b) => a - b);
        
        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                
                let left = j + 1;
                let right = nums.length - 1;
                
                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right];
                    
                    if (sum === target) {
                        result.push([nums[i], nums[j], nums[left], nums[right]]);
                        
                        while (left < right && nums[left] === nums[left + 1]) left++;
                        while (left < right && nums[right] === nums[right - 1]) right--;
                        
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return result;
    }

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

    static setMatrixZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let firstRowZero = false;
        let firstColZero = false;
        
        // Check if first row has any zeros
        for (let j = 0; j < cols; j++) {
            if (matrix[0][j] === 0) {
                firstRowZero = true;
                break;
            }
        }
        
        // Check if first column has any zeros
        for (let i = 0; i < rows; i++) {
            if (matrix[i][0] === 0) {
                firstColZero = true;
                break;
            }
        }
        
        // Use first row and column as flags
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeros based on flags
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Handle first row
        if (firstRowZero) {
            for (let j = 0; j < cols; j++) {
                matrix[0][j] = 0;
            }
        }
        
        // Handle first column
        if (firstColZero) {
            for (let i = 0; i < rows; i++) {
                matrix[i][0] = 0;
            }
        }
        
        return matrix;
    }

    static missingNumber(nums) {
        const n = nums.length;
        const expectedSum = (n * (n + 1)) / 2;
        const actualSum = nums.reduce((acc, num) => acc + num, 0);
        return expectedSum - actualSum;
    }

    static missingAndRepeated(grid) {
        const map = new Map();
        let repeated = -1;
        let missing = -1;
        const n = grid.length;
        
        // Find repeated element
        for (let row of grid) {
            for (let element of row) {
                if (map.has(element)) {
                    repeated = element;
                } else {
                    map.set(element, true);
                }
            }
        }
        
        // Find missing element
        for (let i = 1; i <= n * n; i++) {
            if (!map.has(i)) {
                missing = i;
                break;
            }
        }
        
        return [repeated, missing];
    }

    static productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n);
        
        // Build prefix products
        result[0] = 1;
        for (let i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        // Build suffix products and multiply
        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] = result[i] * right;
            right = right * nums[i];
        }
        
        return result;
    }

    static wordSearch(board, word) {
        const rows = board.length;
        const cols = board[0].length;
        
        function dfs(row, col, index) {
            if (index === word.length) return true;
            if (row < 0 || row >= rows || col < 0 || col >= cols || 
                board[row][col] !== word[index]) {
                return false;
            }
            
            const temp = board[row][col];
            board[row][col] = '#';
            
            const found = 
                dfs(row + 1, col, index + 1) ||
                dfs(row - 1, col, index + 1) ||
                dfs(row, col + 1, index + 1) ||
                dfs(row, col - 1, index + 1);
            
            board[row][col] = temp;
            return found;
        }
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (dfs(i, j, 0)) return true;
            }
        }
        return false;
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

function runTwoSum() {
    try {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const performance = PerformanceMonitor.measure(
            'Two Sum',
            (data) => DSAAlgorithms.twoSum(data.nums, data.target),
            { nums, target }
        );
        
        const resultDiv = document.getElementById('twosum-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Array:</strong> [${nums.join(', ')}]<br>
                <strong>Target:</strong> ${target}<br>
                <strong>Indices:</strong> [${performance.result.join(', ')}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runTwoSum:', error);
    }
}

function runThreeSum() {
    try {
        const input = [-1, 0, 1, 2, -1, -4];
        const performance = PerformanceMonitor.measure(
            'Three Sum',
            DSAAlgorithms.threeSum,
            input
        );
        
        const resultDiv = document.getElementById('threesum-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const outputStr = performance.result.map(arr => `[${arr.join(',')}]`).join(', ');
            resultDiv.innerHTML = `
                <strong>Array:</strong> [${input.join(', ')}]<br>
                <strong>Triplets:</strong> [${outputStr}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runThreeSum:', error);
    }
}

function runFourSum() {
    try {
        const nums = [1, 0, -1, 0, -2, 2];
        const target = 0;
        const performance = PerformanceMonitor.measure(
            'Four Sum',
            (data) => DSAAlgorithms.fourSum(data.nums, data.target),
            { nums, target }
        );
        
        const resultDiv = document.getElementById('foursum-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const outputStr = performance.result.map(arr => `[${arr.join(',')}]`).join(', ');
            resultDiv.innerHTML = `
                <strong>Array:</strong> [${nums.join(', ')}]<br>
                <strong>Target:</strong> ${target}<br>
                <strong>Quadruplets:</strong> [${outputStr}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runFourSum:', error);
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

function runSetMatrixZeroes() {
    try {
        const input = [[1,1,1],[1,0,1],[1,1,1]];
        const inputCopy = input.map(row => [...row]);
        const performance = PerformanceMonitor.measure(
            'Set Matrix Zeroes',
            DSAAlgorithms.setMatrixZeroes,
            inputCopy
        );
        
        const resultDiv = document.getElementById('setmatrix-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const inputStr = input.map(row => `[${row.join(',')}]`).join(',');
            const outputStr = performance.result.map(row => `[${row.join(',')}]`).join(',');
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${inputStr}]<br>
                <strong>Output:</strong> [${outputStr}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runSetMatrixZeroes:', error);
    }
}

function runMissingNumber() {
    try {
        const input = [3, 0, 1];
        const performance = PerformanceMonitor.measure(
            'Missing Number',
            DSAAlgorithms.missingNumber,
            input
        );
        
        const resultDiv = document.getElementById('missingnumber-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Array:</strong> [${input.join(', ')}]<br>
                <strong>Missing:</strong> ${performance.result}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runMissingNumber:', error);
    }
}

function runMissingAndRepeated() {
    try {
        const input = [[1,3],[2,2]];
        const performance = PerformanceMonitor.measure(
            'Missing and Repeated',
            DSAAlgorithms.missingAndRepeated,
            input
        );
        
        const resultDiv = document.getElementById('missingandrepeated-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const inputStr = input.map(row => `[${row.join(',')}]`).join(',');
            resultDiv.innerHTML = `
                <strong>Grid:</strong> [${inputStr}]<br>
                <strong>Repeated:</strong> ${performance.result[0]}, <strong>Missing:</strong> ${performance.result[1]}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runMissingAndRepeated:', error);
    }
}

function runProductArray() {
    try {
        const input = [1, 2, 3, 4];
        const performance = PerformanceMonitor.measure(
            'Product Except Self',
            DSAAlgorithms.productExceptSelf,
            input
        );
        
        const resultDiv = document.getElementById('productarray-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            resultDiv.innerHTML = `
                <strong>Input:</strong> [${input.join(', ')}]<br>
                <strong>Output:</strong> [${performance.result.join(', ')}]<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runProductArray:', error);
    }
}

function runWordSearch() {
    try {
        const board = [
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ];
        const word = 'ABCCED';
        
        const boardCopy = board.map(row => [...row]);
        const performance = PerformanceMonitor.measure(
            'Word Search',
            (data) => DSAAlgorithms.wordSearch(data.board, data.word),
            { board: boardCopy, word }
        );
        
        const resultDiv = document.getElementById('wordsearch-result');
        if (resultDiv) {
            resultDiv.className = 'result visible';
            const boardStr = board.map(row => `[${row.join(',')}]`).join(',');
            resultDiv.innerHTML = `
                <strong>Board:</strong> [${boardStr}]<br>
                <strong>Word:</strong> "${word}"<br>
                <strong>Found:</strong> ${performance.result}<br>
                <strong>Time:</strong> ${performance.executionTime}ms
            `;
        }
    } catch (error) {
        console.error('Error in runWordSearch:', error);
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

// Search and Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const filterChips = document.querySelectorAll('.filter-chip');
    const algorithmCards = document.querySelectorAll('.algorithm-card');
    const visibleCount = document.getElementById('visibleCount');
    
    let currentFilter = 'all';
    
    // Search functionality
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterAlgorithms(searchTerm, currentFilter);
        });
    }
    
    // Filter chip functionality
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            const searchTerm = searchBox ? searchBox.value.toLowerCase() : '';
            filterAlgorithms(searchTerm, currentFilter);
        });
    });
    
    function filterAlgorithms(searchTerm, filter) {
        let visibleCards = 0;
        
        algorithmCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const matchesSearch = !searchTerm || cardText.includes(searchTerm);
            const matchesFilter = filter === 'all' || cardText.includes(filter.toLowerCase());
            
            if (matchesSearch && matchesFilter) {
                card.classList.remove('hidden');
                visibleCards++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        if (visibleCount) {
            visibleCount.textContent = visibleCards;
            visibleCount.style.color = visibleCards === 20 ? '#10b981' : '#f59e0b';
        }
    }
    
    // Add keyboard shortcut for search (Ctrl/Cmd + K)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchBox) {
                searchBox.focus();
            }
        }
    });
    
    console.log('✨ Search and filter functionality loaded!');
    
    // Back to Top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
                backToTopButton.style.opacity = '1';
            } else {
                backToTopButton.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        backToTopButton.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        backToTopButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        backToTopButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    }
});