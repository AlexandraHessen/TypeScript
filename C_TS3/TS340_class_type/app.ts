
class Transp {

    speed:number;

    constructor() {
        this.speed=0; 
    }

    start(_speed:number):void {
        this.speed=_speed;
    }

    stop():void {
        this.speed=0;
    }
    
}

let transp1:Transp=new Transp;

//instanceof - экземпляр класса
console.log( transp1 instanceof Transp ); //true
console.log( transp1 instanceof String ); //false 

// tr:Transp поскольку tr имеет тип Transp TS знает что у Transp есть метод start и stop
// поэтому он позволяет эти методы вызывать, для этого нужна эта типизация
function trainer(tr:Transp):void {
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}

trainer(transp1);
