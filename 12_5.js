class ElectroDevice{
  constructor(name, color, watt){
    this.name =   name,
    this.status = false,
    this.color =  color || 'white',
    this.watt =   watt
  }
  
  setStatus(){
    this.status = !this.status;
  }
}
/* ----------------- */

class PerconalComputer extends ElectroDevice{
  constructor(name, color, watt){
    super(name, color, watt);
  }
  
  getCost(hours){
    console.log(`${this.name} с цветом ${this.color} потребит ${this.watt / 1000} киловатт за ${hours} часов`);
  }
}

const basicPC = new PerconalComputer('Обычный компьютер', 'blue', 450);
basicPC.setStatus();
basicPC.getCost(10);
// console.log(basicPC);

/* ----------------- */

class DeskLamp extends ElectroDevice{
  constructor(name, color, watt){
    super(name, color, watt);
  }
  
  getStatus(){
    console.log(this.status? `${this.name} потребит ${this.watt / 1000} киловатт` : 'Невероятно! Ваша лампа отключена!');
  }
}

const basicLAMP = new DeskLamp('Обычная лампа', 'green', 50);
// basicLAMP.setStatus();
basicLAMP.getStatus();
// console.log(basicLAMP);

// Всё верно. Чуть выше показала, как можно упростить некоторые места в коде :)