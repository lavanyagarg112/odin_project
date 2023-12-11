function reverse_string(s){
    const len = s.length;
    let newstring = "";
    for (let i = len-1; i >= 0; i = i - 1){
        const c = s.charAt(i)
        newstring = newstring + c
    }
    return newstring;
}

console.log(reverse_string("hi"));