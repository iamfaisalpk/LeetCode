/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
let check = function (arr, i, k) {
    for (let j = 0; j < arr.length; j++) {
        if (Math.abs(i - arr[j]) <= k) {
            return i;
        }
    }
    return;
}
var findKDistantIndices = function (nums, key, k) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            arr.push(i);
        }
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let x=(check(arr, i, k));
        if(x!=undefined){
            res.push(x);
        }
    }
    return res;
}