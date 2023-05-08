arr=[2,2,2,9,5]
 
let sum=0
function sumEvens(a){

    arr.forEach(
        (element,index, arr) => {
            if(element%2==0){
                sum=sum+element
                return sum
            }
        
    });
}

let sum1 = sumEvens(arr);
console.log(sum)
