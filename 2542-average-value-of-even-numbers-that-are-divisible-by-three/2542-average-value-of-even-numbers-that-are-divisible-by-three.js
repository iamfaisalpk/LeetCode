/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum =0, count =0

    for(let num of nums){
        if(num%3==0 && num%2==0){
            sum += num
            count++
        }
    }

    return sum!=0 ? Math.floor(sum/count) : 0
};