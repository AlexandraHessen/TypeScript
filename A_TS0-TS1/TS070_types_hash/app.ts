var friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};
// только 4 ключа больше нельзя добавлять
console.log(friend);


var friendKey:keyof {fam:string,im:string,otch:string,age:number};
// friendKey:keyof означает что переменная может быть только одним из ключей
friendKey="fam";
// friendKey="fam2"; // ошибка
console.log(friendKey) //fam

let person:{fio:string,age:number}={fio:"Иванов",age:29};

let person2:{fio:string,age?:number}={fio:"Иванов"};
//? может быть, может не быть
