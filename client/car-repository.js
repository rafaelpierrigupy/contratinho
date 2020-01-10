const axios = require('axios');

class CarRepository {
  findCar(carId) {
    axios.get(`http://localhost:5555/cars/${carId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

module.exports = CarRepository;
