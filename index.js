function filter_list(l) {
    // Return a new array with the strings filtered out
    const numberArray = []
    l.filter((value) => {if (Number.isInteger(value))  {numberArray.push(value) }})
    return numberArray
}

console.log(filter_list([1,2,'a','b']))