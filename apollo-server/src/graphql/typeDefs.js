const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type CompanyHeadQuarters {
    address: String
    city: String
    state: String
  }

  type CompanyInfo {
    name: String
    founder: String
    founded: Int
    employees: Int
    vehicles: Int
    launch_sites: Int
    test_sites: Int
    ceo: String
    cto: String
    coo: String
    cto_propulsion: String
    valuation: Int
    headquarters: CompanyHeadQuarters
    summary: String
  }

  type HistoricalEventLink {
    reddit: String
    article: String
    wikipedia: String
  }

  type HistoricalEvent {
    id: Int
    title: String
    event_date_unix: Int
    flight_number: Int
    details: String
    links: HistoricalEventLink
  }

  type Query {
    companyInfo: CompanyInfo!
    historicalEvent(id: Int): HistoricalEvent!
    historicalEvents: [HistoricalEvent]!
    counter: Int!
  }

  type Mutation {
    incrementCounter: Int
  }
`;

module.exports = typeDefs;
