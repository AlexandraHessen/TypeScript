
// type новыйтип=старыйтип;

// Например:

// type PersonIdent=number;
// let ivanovId:PersonIdent=25;

// type Color=number|string;
// let danger:Color=0xFF0000;
// let success:Color='green';

type StringList=Array<string>;
// массив содержание тоько строки

var sl1:StringList=["a","b","c"];
var sl2:StringList=sl1;


type Man={fam:string,im:string,otch:string,age:number};

var friend:Man
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

var friendKey:keyof Man;
friendKey="fam";
//friendKey="fam2"; // ошибка
