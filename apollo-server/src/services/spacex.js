const BASE_URL = "https://api.spacexdata.com/v3";

function createSpaceXService(client) {
  const getCompanyInfo = () => client.get(`${BASE_URL}/info`);

  const getHistoricalEvents = () => client.get(`${BASE_URL}/history`);

  const getHistoricalEventById = id => client.get(`${BASE_URL}/history/${id}`);

  const getRockets = () => client.get(`${BASE_URL}/rockets`);

  const getRocketsById = id => client.get(`${BASE_URL}/rockets/${id}`);

  return {
    getCompanyInfo,
    getHistoricalEvents,
    getHistoricalEventById,
    getRockets,
    getRocketsById
  };
}

module.exports = createSpaceXService;
