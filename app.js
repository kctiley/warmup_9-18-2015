//Implement a function which takes two parameters, both of which are arrays, and zips them together. 
//ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].

var zippy = function(arrNum1, arrNum2, resultCurr){
    var result = resultCurr || [];
    if (arrNum1 == 0 || arrNum2 == 0){
        console.log(result);
    }
    else {
        result.push(arrNum1[0]);
        result.push(arrNum2[0]);
        return zippy(arrNum1.slice(1), arrNum2.slice(1), result)
    }

}

zippy([1,2,3],[4,5,6])