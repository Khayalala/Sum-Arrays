let arrA = [1, 2, 4];
let arrB = [9, 9, 7];
let arrC = [];
for(i=arrA.length-1; i>=0; i--){
    let n = arrA[i]+arrB[i];
    arrC.unshift(n);
}
for(i=arrC.length-1; i>=0; i--){
    if(i===0){
        break;
    } else if(arrC[i]>9){
        arrC[i]=arrC[i]%10;
        arrC[i-1] +=1;
    }
}
console.log(arrC);