
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const prefixSum = new Map();
    prefixSum.set(0, 1); 
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }
        
       
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }
    
    return count;
};
