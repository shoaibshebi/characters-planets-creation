const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");
const queries = require("./knex/queries/queries.js");

const typeDefs = gql`
  type Planet {
    name: String
    description: String
    code: String
    picture_url: String
  }
  type Query {
    planets: [Planet]
  }
`;

const schema = {
  typeDefs,
  resolvers: {
    // Prototypes for GET
    Query: {
      planets: (_) => queries.getPlanets(),
    },
  },
};

//configuring apollo server
let apolloServer = null;
let app = null;
const startServer = async () => {
  apolloServer = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers,
  });
  await apolloServer.start();

  app = new Koa();
  apolloServer.applyMiddleware({ app });
  app.listen({ port: 3000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:3000${apolloServer.graphqlPath}`
    )
  );
};
startServer();
