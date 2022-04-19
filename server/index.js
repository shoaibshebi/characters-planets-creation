const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { parseAuthorizationHeader } = require("./auth/auth");

const { types, resolvers } = require("./gql/index");

//configuring apollo server
const startServer = async () => {
  let app = new Koa();

  let apolloServer = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers,
    context: ({ ctx }) => ({
      authToken: parseAuthorizationHeader(ctx.request),
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen({ port: 5000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:3000${apolloServer.graphqlPath}`
    )
  );
};
startServer();
