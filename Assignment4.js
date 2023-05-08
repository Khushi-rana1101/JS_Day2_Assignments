let numbers = [4, -4, 10, 203, 53, 11];

let a = numbers.reduce((i,j)=>{
    if(i<j)
    return i
    else 
    return j
})

console.log(a)


