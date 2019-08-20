<template>
  <div id="home" class="page">
    <h1>SpaceX Historical Events</h1>
    <ApolloQuery
      :query="gql => gql`
        query SpaceXHistoricalEventsQuery {
          historicalEvents {
            id
            title
            event_date_unix
            flight_number
            details
            links {
              reddit
              article
              wikipedia
            }
          }
        }
      `"
    >
      <template slot-scope="{ result: { data, loading, error } }">
        <spinner-loader v-if="loading" :loading="true" />
        <div v-else-if="error">There was an error loading spacex info</div>
        <div v-else-if="data">
          <ul class="event-list">
            <li v-for="event of data.historicalEvents" :key="event.id" class="event-list-item">
              <p>Title: {{event.title}}</p>
              <p>Flight Number: {{event.flight_number}}</p>
              <p>{{event.details}}</p>

              <ul>
                <li v-if="event.links.reddit">
                  <a :href="event.links.reddit" target="_blank" rel="noopener">Reddit Link</a>
                </li>
                <li v-if="event.links.article">
                  <a :href="event.links.article" target="_blank" rel="noopener">Article Link</a>
                </li>
                <li v-if="event.links.wikipedia">
                  <a :href="event.links.wikipedia" target="_blank" rel="noopener">Wikipedia Link</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<style lang="scss">
.event-list {
  margin: 0 auto;
  margin: 1rem auto;
}

.event-list-item {
  background-color: #eeeeee;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.17);
  padding: 1rem;
  border-radius: 2px;

  & + & {
    margin-top: 1rem;
  }

  & > * + * {
    margin-top: 1rem;
  }
}
</style>