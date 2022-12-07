const charsClose = [ ')','}',']'];
const charsOpen = ['(','{','[']

function isValid(s: string):boolean {
    const aux = s.split('');
    let valid = 0;
    for (let i = 0; i < aux.length; i++) 
        if (charsOpen.includes(aux[i]))
            if(aux[i + 1] === charsClose[charsOpen.findIndex((ele)=> ele === aux[i])])
                valid++;
    return valid == aux.length / 2;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.      */