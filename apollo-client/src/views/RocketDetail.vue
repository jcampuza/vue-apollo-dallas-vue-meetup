<template>
  <ApolloQuery
    :variables="{
      id: $route.params.id
    }"
    :query="gql => gql`
      query RocketDetailQuery($id: ID) {
        rocket(id: $id) {
          id
          active
          stages
          boosters
          cost_per_launch
          success_rate_pct
          first_flight
          country
          company
          height {
            meters
            feet
          }
          diameter {
            meters
            feet
          }
          mass {
            kg
            lb
          }
          rocket_id
          rocket_name
          rocket_type
          wikipedia
        }
      }
    `"
  >
    <template slot-scope="{ result: { data, loading } }">
      <!-- Some content -->
      <spinner-loader v-if="loading" :loading="true" />
      <div v-else-if="data" class="page">
        <h1>{{data.rocket.rocket_name}}</h1>
        <p>
          Status:
          <span v-if="data.rocket.active">Active</span>
          <span v-else>Inactive</span>
        </p>
        <p>Number of Boosters: {{data.rocket.boosters}}</p>
        <p>Cost per launch: ${{data.rocket.cost_per_launch}}</p>
        <p>Successful Launch Percentage: {{data.rocket.success_rate_pct}}%</p>
        <p>First Flight: {{data.rocket.first_flight}}</p>
      </div>
    </template>
  </ApolloQuery>
</template>