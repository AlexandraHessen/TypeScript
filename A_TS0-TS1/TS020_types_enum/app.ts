enum Color { BLACK, YELLOW, RED=8, GREEN };
// enum Color { BLACK, YELLOW="y", RED="red", GREEN="g" };
// каждая последующая переммная увеличивается на 1
// может оказаться что две const равны одному и тому же значению
// новый тип Color и поэтому с большой буквы
// если обращаемся по индексам то не по ноьмеру в массиве а по значению
// BLACK, =0
// YELLOW, =1
// RED=8, 
// GREEN =9
var col1:Color=Color.BLACK;
console.log(col1); //0

console.log(Color.YELLOW); //1

console.log(Color.GREEN); //9

console.log(Color[1]); //YELLOW

console.log(Color[2]); //undefined
console.log(Color[9]); //GREEN




// это не enum

var myStr:'First'|'Second';
// | или
var myStr2:5|'Second';

myStr='Second';
myStr2=5;
// myStr='Third'; // ошибка


enum Sides { SIDE_UP=1, SIDE_RIGHT, SIDE_DOWN, SIDE_LEFT };
let side1:Sides=Sides.SIDE_RIGHT; //2
console.log(side1);
console.log(Sides[2]); //SIDE_RIGHT