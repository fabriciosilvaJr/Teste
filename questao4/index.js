
var arr =  {SP: 67.83643, RJ: 36.67866, MG:29.22988, ES:27.16548, Outros: 19.84953};


var sum = 0;

//Finding the sum
for(key in arr){
    sum += arr[key];
}
console.log("A soma total do percentual é igual = " + sum);
//Finding the average
for(key in arr){
    arr[key] = (arr[key]/sum)*100 + '%';
}
console.log(arr);