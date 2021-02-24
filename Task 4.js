function ElectricalDevice() {
    this.nomination = "Электроприбор";
}

ElectricalDevice.prototype.plugIn = function () {
    console.log(`Прибор включен в розетку`);
}

ElectricalDevice.prototype.unPlug = function () {
    console.log(`Прибор выключен из розетки`);
}

function Kettle(brand, color, price, voltage, power) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.voltage = voltage;
    this.power = power;
}

Kettle.prototype = new ElectricalDevice();

Kettle.prototype.boilWater = function () {
    console.log("Water is boiled")
}

Kettle.prototype.display = function () {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - чайник ${this.brand}: потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}тг.`)
}

function MicroWave(brand, color, price, voltage, power) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.voltage = voltage;
    this.power = power;
}

MicroWave.prototype = new ElectricalDevice();

MicroWave.prototype.readyFood = function () {
    console.log("Food is ready")
}

MicroWave.prototype.display = function () {
    this.energyConsumption = this.voltage * this.power;
    console.log(`${this.nomination} - микроволновка ${this.brand}: потребление энергии - ${this.energyConsumption}W, цвет - ${this.color}, цена - ${this.price}тг.`)
}

const kettleBosh = new Kettle("Bosh", "Green", 5000, 100, 2);
console.log(kettleBosh.display())

const MicroWaveLG = new MicroWave("LG", "White", 3000, 200, 3);
console.log(MicroWaveLG.display())
