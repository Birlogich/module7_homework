//5
class ElectricalDevice {
   constructor(device, power) {
      this.device = device;
      this.power = power;
      this.connect = false;
   }
   connected() {
      console.log(`${this.device} is connected!`);
      this.connect = true;
   }
   unconnected() {
      console.log(`${this.device} is unconnected!`);
      this.connect = false;
   }
}

class Tv extends ElectricalDevice {
   constructor(device, power, model, size, resolution) {
      super(device, power);
      this.model = model
      this.size = size
      this.resolution = resolution
      this.connect = true;
   }
}

const tv = new Tv('TV', '220v', 'Bravia', '25 inch', '4k resolution')
console.log(tv)

class Lamp extends ElectricalDevice {
   constructor(device, power, height, width) {
      super(device, power);
      this.height = height
      this.width = width
   }
}

const ordinaryLamp = new Lamp('Lamp', '220v', '100 cm', '15cm')
console.log(ordinaryLamp)
console.log(ordinaryLamp.unconnected())