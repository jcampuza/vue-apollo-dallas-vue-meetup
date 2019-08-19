<template>
  <ApolloQuery :query="gql => gql`
      query GetCounterQuery {
        counter
      }
    `">
    <template v-slot="{ result: { data, loading }, query }">
      <ApolloMutation
        @done="query.refetch()"
        :mutation="gql => gql`
        mutation UpdateCounterMutation {
          incrementCounter
        }
      `"
      >
        <template v-slot="{ mutate, loading, error }">
          <button :disabled="loading" @click="mutate">Click to update Counter</button>
          <p>
            Current Count
            <span v-if="data && data.counter">{{data.counter}}</span>
          </p>
        </template>
      </ApolloMutation>
    </template>
  </ApolloQuery>
</template>