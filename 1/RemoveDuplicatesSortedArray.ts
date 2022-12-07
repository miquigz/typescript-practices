function removeDuplicates(nums: number[]): number {
    let lengthAct:number = nums.length;
    for(let i= 0; i < nums.length; i++)
        for(let j= i + 1; j < nums.length; j ++ )
            if(nums[i] === nums[j]){
                // console.log('Entre condcion:', nums[i] ,' y ', nums[j]);
                // console.log('Eliminado:', nums[j], 'en indice:', i);
                lengthAct--;
                nums.splice(j, 1);
                j--;
            }
    // console.log('arr final:', nums);
    return lengthAct;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([0,7,1,3,0,2,6,4,44,23,3,3,4]));