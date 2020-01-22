const axios = require('axios');
const https = require('https');

class CarRepository {
  async findCar(carId) {
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    const response = await axios.get(`https://localhost:5555/cars/${carId}`, {
      headers: {
        'Accept': 'application/json'
      },
      httpsAgent: agent,
    });
    return response.data; 
  }
}

module.exports = CarRepository;
