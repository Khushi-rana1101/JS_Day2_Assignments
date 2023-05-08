let arrMax = [1,21,67,45,33,18,1000,101,22,0,1]
let maxValue = arrMax[0]

arrMax.forEach((element, index, arrMax) => {
if(maxValue<element)
maxValue=element
});
console.log(maxValue)