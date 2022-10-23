//4

//Родительский объект-конструктор
function ElectricalDevice(device, power) {
   this.device = device;
   this.power = power;
   this.connect = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalDevice.prototype.connected = function () {
   console.log(`${this.device} is connected!`);
   this.connect = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalDevice.prototype.unconnected = function () {
   console.log(`${this.device} is unconnected!`);
   this.connect = false;
};

//Свойства для телевизоров

function Tv(device, power, model, size, resolution) {
   this.device = device;
   this.power = power;
   this.model = model
   this.size = size
   this.resolution = resolution
   this.connect = true;
}

Tv.prototype = new ElectricalDevice();

const sonyBravia = new Tv('TV', '220v', 'Bravia', '25 inch', '4k resolution')
sonyBravia.connected()
console.log(sonyBravia)

//Свойства для ламп

function Lamp(device, power, height, width) {
   this.device = device;
   this.power = power;
   this.height = height
   this.width = width
}

Lamp.prototype = new ElectricalDevice();

const ordinaryLamp = new Lamp('Lamp', '220v', '100 cm', '15cm')
ordinaryLamp.unconnected()
console.log(ordinaryLamp)