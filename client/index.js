const CarRepository = require('./car-repository');

const carRepository = new CarRepository();

const command = async () => {
  const car = await carRepository.findCar(1);
  console.log(car);
}

command();
