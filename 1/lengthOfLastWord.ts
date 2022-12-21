function lengthOfLastWord(s: string):number {
    const arr = s.trim().split('');  
    let cant:number = 0;
    let char = arr.pop();
    console.log('CHAR:', char);
    while( char !== ' '){
        cant++;
        char = arr.pop() || ' ';
    }
    return cant;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord('a'));



/*

Given a string s consisting of words and spaces, 
!    return the length of the last word in the string. 

A word is a maximal  substring
consisting of non-space characters only.

Constraints: 
    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.


*/