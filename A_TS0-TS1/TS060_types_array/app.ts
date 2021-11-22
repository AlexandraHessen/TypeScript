
// let имя:тип[];

// или так:

// let имя:Array<тип>;

var a1:number[]=[5,7];
console.log(a1);

var a2:Array<number>=[5,7];
console.log(a2);

var a3:ReadonlyArray<number>=[5,7];
// ReadonlyArray содержит неизменяемые элементы к а3 это не относится т.к. она не const
console.log(a3);

a3=[6,2]
// так можно сделать, птому что а3 не const, а неизменяемые элементы это только содержимое
// но мы присловили а3 новую ссылку
// обращение a3[1]