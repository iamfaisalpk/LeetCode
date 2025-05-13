/**
 * @param {number[]} nums
 * @return {number[]}
 */
 nums = [4,3,2,7,8,2,3,1]
let findDisappearedNumbers = function(nums) {
    for (let i=0; i < nums.length; i++){
        while (nums[i] !== nums[nums[i] -1]){
            const n = nums[i];
            nums[i] = nums[n -1];
            nums[n -1] = n;
        }
    }

    const res = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== i + 1) res.push(i + 1)
    }
    return res;
};