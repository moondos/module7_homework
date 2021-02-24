class ElectricalDevice {
	constructor() {
  	this.nomination = "Электроприбор";
  }
  
  plugIn() {
  	console.log(`Прибор включен в розетку`);
  }
  
  unPlug() {
  	console.log(`Прибор выключен из розетки`);
  }
  
}

class Kettle extends ElectricalDevice {
	constructor(brand, color, price, voltage, power) {
    super();
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.voltage = voltage;
    this.power = power;
	}

	boilWater() {
    console.log("Water is boiled");
	}

	display() {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - чайник ${this.brand}: потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}тг.`)
	}
}

class MicroWave extends ElectricalDevice {
	constructor(brand, color, price, voltage, power) {
    super();
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.voltage = voltage;
    this.power = power;
	}
 
	readyFood() {
    console.log("Food is ready")
	}

	display() {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - микроволновка ${this.brand}: потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}тг.`)
	}
 }

const kettleBosh = new Kettle("Bosh", "Green", 5000, 100, 2);
console.log(kettleBosh.display())

const MicroWaveLG = new MicroWave("LG", "White", 3000, 200, 3);
console.log(MicroWaveLG.display())
