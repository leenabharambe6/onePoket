function sumOfArray(array){
    let sum = 0;
    array.forEach((number) =>{
        sum +=number;
    })
    return sum;
}


console.log(sumOfArray([1,2,3,4,5]))