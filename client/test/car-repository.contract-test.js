const path = require("path");
const chai = require("chai");
const { Pact } = require("@pact-foundation/pact");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
const CarRepository = require('../car-repository');

chai.use(chaiAsPromised);

describe("Pact", () => {
  const provider = new Pact({
    consumer: "CarRepository",
    provider: "server",
    port: 5555,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    logLevel: "ERROR",
  });

  const EXPECTED_BODY = {
    id: 1,
    name: "Fusca",
  };

  context('when there is a car registered', () => {
    before(() => provider.setup()
      .then(() => provider.addInteraction({
        state: "There is a car registered",
        uponReceiving: "a request for a specific car",
        withRequest: {
          method: "GET",
          path: "/cars/1",
          headers: { Accept: "application/json" },
        },
        willRespondWith: {
          status: 200,
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: EXPECTED_BODY,
        },
      })));

    it('a car is retrievable', async () => {
      const carRepository = new CarRepository();
      const car = await carRepository.findCar(1);
      expect(car.id).to.be.equal(1);
      expect(car.name).to.be.equal('Fusca');
    });

    afterEach(() => provider.verify());
  });

  after(() => provider.finalize());
});
