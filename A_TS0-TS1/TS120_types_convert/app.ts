// <новыйтип>значение

// или так:

// значение as новыйтип

// Например:

// var val:number|string=5;  //НЕ РАБОТАЕТ
// var nval1:number=<number>val;
// var nval2:number=val as number;


var n1:any=5;
console.log(typeof n1);
var s1:string=n1;
console.log(s1); // число 5
console.log(typeof s1);
var s2:string=<string>n1;
console.log(s2);// число 5

var s3:string=n1 as string;
console.log(s3); // число 5
