function remove_from_array(arr, ...args){
    return arr.filter(x => !args.includes(x))
}

console.log(remove_from_array([1,2,3,4], 4,7,6,2));