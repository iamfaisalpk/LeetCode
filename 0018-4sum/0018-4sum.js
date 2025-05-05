function fourSum(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 3; i++) {
        // Skip duplicate elements for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicate elements for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth number
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
