<template>
  <ApolloQuery
    :query="gql => gql`
      query RocketsQuery {
        rockets {
          id
          rocket_id
          rocket_name
          company
        }
      }
    `"
  >
    <template slot-scope="{ result: { data, loading } }">
      <spinner-loader v-if="loading" :loading="true" />
      <div class="page" v-else-if="data">
        <h1>Rockets</h1>
        <ul class="list">
          <li
            class="list-item"
            v-for="rocket of data.rockets"
            :key="rocket.id"
            @click="$router.push(`/rockets/${rocket.rocket_id}`)"
          >
            <p>Rocket Name: {{rocket.rocket_name}}</p>
            <p>Company: {{rocket.company}}</p>
          </li>
        </ul>
      </div>
    </template>
  </ApolloQuery>
</template>