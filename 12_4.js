function ElectroDevice(name, status, watt){
  this.name = name,
  this.status = false,
  this.color = 'white',
  this.watt = 0
}

ElectroDevice.prototype.setStatus = function(){
  this.status = this.status ? false : true;
}

/* ----------------- */

function PerconalComputer(name, color, watt){
  this.name = name,
  this.color = color,
  this.watt = watt
}
PerconalComputer.prototype = new ElectroDevice();

PerconalComputer.prototype.getCost = function(hours){
  console.log(`Компьютер потребит ${this.watt / 1000} киловатт за ${hours} часов`);
}

const basicPC = new PerconalComputer('Обычный компьютер', 'blue', 450);
basicPC.setStatus();
basicPC.getCost(10);
// console.log(basicPC);

/* ----------------- */

function DeskLamp(name, color, watt){
  this.name = name,
  this.color = color,
  this.watt = watt,
  this.status = true
}
DeskLamp.prototype = new ElectroDevice();

DeskLamp.prototype.getStatus = function(){
  if (!this.status){
    console.log('Невероятно! Ваша лампа отключена!');
  } else {
    console.log(`Лампа потребит ${this.watt / 1000} киловатт`);
  }
}

const basicLAMP = new DeskLamp('Обычная лампа', 'green', 50);
basicLAMP.setStatus();
basicLAMP.getStatus();
console.log(basicLAMP);