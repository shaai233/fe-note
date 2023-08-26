/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for(let i = 0; i < k; i++) {
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] > nums[i+1]) {
                const tmp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = tmp;
            }
        }
    }
    return nums[nums.length - k]
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))

