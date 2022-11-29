function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    let continuar:boolean = true;
    let actual:number = 0;
    while (continuar){
        prefix += strs[0].split('')[actual]
        continuar = (strs.filter( (ele)=> ele.split('')[actual] === prefix[actual])).length === strs.length;
        if (!continuar){
            prefix = prefix.slice(0,-1);
        }
        actual++;
    }
    if (strs.length === 1 && strs[0] === '')
        prefix = '';
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['asdw', 'wdasd','fkssa']))

//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
