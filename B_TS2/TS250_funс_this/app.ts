// это не класс а обычный хэш
let car1={

    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string) {
        console.log(prefix+" "+this.num+" "+this.model);
        // обращаемся к несуществующему свойству - ошибки нет, т.к. this:any
        console.log(prefix+" "+this.price); 
    }

};
car1.show("INFO #1:");

// тип Car 
type Car={
    num:string,
    model:string,
    show:(s:string)=>void
};

let car2:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        // обращаемся к несуществующему свойству - ошибки нет, т.к. this:any
        console.log(prefix+" "+this.price); 
    }

};
car2.show("INFO #2:");

let car3:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(this:Car,prefix:string):void {
        // this не явный параметр не надо его передавть
        // если мы указываем this первым - это значит что мы хотим указать его тип
        // ЭТО ТОЛЬКО В ОБЪЕКТАХ в классах так не надо
        console.log(prefix+" "+this.num+" "+this.model);
        // теперь к price обратиться нельзя - TS знает что this = Car
        //console.log(prefix+" "+this.price); // ошибка
    }

};
car3.show("INFO #3:");
