<template>
  <div id="about" class="page">
    <h1>Company Information</h1>
    <ApolloQuery
      :query="gql => gql`
        query SpaceXCompanyInfoQuery {
          companyInfo {
            name
            founder
            founded
          }
        }
      `"
    >
      <template v-slot="{ result: { data, loading, error } }">
        <!-- Some content -->
        <spinner-loader v-if="loading" :loading="true" />
        <div v-else-if="error">There was an error loading spacex info</div>
        <div v-else-if="data">
          <p>Company Name {{data.companyInfo.name}}</p>
          <p>Company Founder {{data.companyInfo.founder}}</p>
          <p>Company Founded {{data.companyInfo.founded}}</p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>