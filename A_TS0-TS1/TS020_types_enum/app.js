var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["YELLOW"] = 1] = "YELLOW";
    Color[Color["RED"] = 8] = "RED";
    Color[Color["GREEN"] = 9] = "GREEN";
})(Color || (Color = {}));
;
// каждая последующая переммная увеличивается на 1
// может оказаться что две const равны одному и тому же значению
// новый тип Color и поэтому с большой буквы
// BLACK, =0
// YELLOW, =1
// RED=8, 
// GREEN =9
var col1 = Color.BLACK;
console.log(col1); //0
console.log(Color.YELLOW); //1
console.log(Color.GREEN); //9
console.log(Color[1]); //YELLOW
// это не enum
var myStr;
// | или
var myStr2;
myStr = 'Second';
myStr2 = 5;
// myStr='Third'; // ошибка
var Sides;
(function (Sides) {
    Sides[Sides["SIDE_UP"] = 1] = "SIDE_UP";
    Sides[Sides["SIDE_RIGHT"] = 2] = "SIDE_RIGHT";
    Sides[Sides["SIDE_DOWN"] = 3] = "SIDE_DOWN";
    Sides[Sides["SIDE_LEFT"] = 4] = "SIDE_LEFT";
})(Sides || (Sides = {}));
;
var side1 = Sides.SIDE_RIGHT; //1
console.log(side1);
console.log(Sides[2]);
//# sourceMappingURL=app.js.map