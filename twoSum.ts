function twoSum(nums: number[], target: number): number[] {
    for (let i=0; i < nums.length; i++)
        for(let j=0; j < nums.length; j++)
            if ( (j !== i) && nums[i] + nums[j] === target)
                return [i, j];
    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));