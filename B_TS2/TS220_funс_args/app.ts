// function имя(аргумент1:тип1, аргумент2:тип2, аргумент3?:тип3, аргумент4?:тип4):типРезультата {
//     ... тело функции
//   }

// ЛИБО НЕОБЯЗЕТЛЬНЫЙ АРГУМЕНТ ? ЛИБО УМОЛЧАТЕЛЬНОЕ ЗНАЧЕНИЕ ="EEE"
// •	Либо ставим необязательным аргумент3?:тип3
// •	Либо присваиваем умолчательное значение arg2:string=”aaaa”
// •	Если необязательный аргумент не передан, то возвращается undefined
// •	Если не передан аргумент с умолтельный значением, его значение равно присвоенному значению 



  
function test1(arg1:number,arg2:string):void {
    console.log("test1: arg1="+arg1+" arg2="+arg2);
}

test1(11,"f");
// test1(11); // ошибка
// ОБЯЗАТЕЛЬНО РОВНО столько аргументов сколько указано


function test2(arg1:number,arg2?:string,arg3?:boolean):void {
    console.log("test2: arg1="+arg1+" arg2="+arg2+" arg3="+arg3);
}
    
test2(22,"sss",false);
test2(22,"sss");
test2(22);


function test3(arg1:number,arg2:string="hello",arg3?:boolean):void {
    console.log("test3: arg1="+arg1+" arg2="+arg2+" arg3="+arg3);
}
    
test3(33,"sss",false);
test3(33,"sss");
test3(33);

//...rest - оператор получения остатков аргументов
// ...rest:string[] -любое количсетво аргументов и все они строки и все они попадут в массив строк
// rest массив строк
function test4(arg1:number,...rest:string[]):void {
    console.log("test4: arg1="+arg1+" rest=");
    console.log(rest);
}

test4(44,"b","e","m");
