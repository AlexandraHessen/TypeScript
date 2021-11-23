
// типизация аргументов и возвращаемого значения
// классические функции

// function имяфункции(аргумент1:тип1,аргумент2:тип2,...):типРезультата {
//     // ... тело функции
//   }

function kvadrat(v:number):number {
    return v*v;
}

function myAlert(txt:string):void {
    alert(txt);
}

// типизация аргументов и возвращаемого значения
// стрелочные функции

// в данном случае переменная kvadrat2 нетипизирована но
// работает автотипизация мы переменной сразу присвиваем значение и она получает тип функция

const kvadrat2 = (v:number):number => {
    return v*v;
}

const myAlert2 = (txt:string):void => {
    alert(txt);
}

// типизация аргументов, возвращаемого значения
// и самого идентификатора (имени) функции
// классические функции

// в этом случае переменная kvadrat3 типизирована
const kvadrat3:(v:number)=>number = function(v:number):number {
    return v*v;
}

const myAlert3:(txt:string)=>void = function(txt:string):void {
    alert(txt);
}

// типизация аргументов, возвращаемого значения
// и самого идентификатора (имени) функции
// стрелочные функции

// в этом случае переменная kvadrat4 типизирована
const kvadrat4:(v:number)=>number = (v:number):number => {
    return v*v;
}

const myAlert4:(txt:string)=>void = (txt:string) => {
    alert(txt);
}
