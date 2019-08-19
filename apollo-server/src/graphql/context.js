const axios = require("axios");
const createSpaceXService = require("../services/spacex");

module.exports = () => ({
  services: {
    spaceX: createSpaceXService(axios)
  }
});
