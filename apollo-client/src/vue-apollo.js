import Vue from "vue";
import VueApollo from "vue-apollo";
import { createApolloClient } from "vue-cli-plugin-apollo/graphql-client";

// Install the vue plugin
Vue.use(VueApollo);

// Http endpoint
const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:4000/graphql";

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint
};

// Call this in the Vue app file
export function createProvider(options = {}) {
  // Create apollo client
  const { apolloClient } = createApolloClient({
    ...defaultOptions,
    ...options
  });

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: "cache-and-network"
      }
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        "%cError",
        "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
        error.message
      );
    }
  });

  return apolloProvider;
}
