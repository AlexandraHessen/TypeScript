enum Color { BLACK, YELLOW, RED=8, GREEN };
// каждая последующая переммная увеличивается на 1
// может оказаться что две const равны одному и тому же значению
// новый тип Color и поэтому с большой буквы
// BLACK, =0
// YELLOW, =1
// RED=8, 
// GREEN =9
var col1:Color=Color.BLACK;
console.log(col1); //0

console.log(Color.YELLOW); //1

console.log(Color.GREEN); //9

console.log(Color[1]); //YELLOW


// это не enum

var myStr:'First'|'Second';
// | или
var myStr2:5|'Second';

myStr='Second';
myStr2=5;
// myStr='Third'; // ошибка
