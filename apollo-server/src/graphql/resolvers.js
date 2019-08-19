let count = 0;
const resolvers = {
  Query: {
    companyInfo: async (_, __, { services }) => {
      const res = await services.spaceX.getCompanyInfo();

      return res.data;
    },

    historicalEvents: async (_, __, { services }) => {
      const res = await services.spaceX.getHistoricalEvents();

      return res.data;
    },

    historicalEvent: async (_, { id }, { services }) => {
      const res = await services.spaceX.getHistoricalEventById(id);

      return res.data;
    },

    counter: () => count
  },

  Mutation: {
    incrementCounter: () => {
      count += 1;
      return count;
    }
  }
};

module.exports = resolvers;
