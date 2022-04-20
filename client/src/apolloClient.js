import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const DUMMY_TOKEN =
  "Bearer eyJlbWFpbCI6InNob2FpYjQwMzA4OTFAZ21haWwuY29tIiwiaWQiOiI2MWQyYWI1ZjA0NjU4NTNmOTEzNGUyZWQiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY1MDAxNjA2NiwiZXhwIjoxNjgxNTUyMDY2fQ";

const httpLink = new HttpLink({ uri: "http://localhost:3000/graphql/" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: DUMMY_TOKEN || null,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export { client };
