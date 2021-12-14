import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';

const cors = Cors();

let developers = [
  {
    id: 'fd66e955-10e9-4762-8847-14fbdc80e38a',
    name: 'Joe Burton',
    skills: 'React, CSS, HTML',
  },
  {
    id: 'fd66e955-10e9-4762-8847-14fbdc80e38b',
    name: 'Jill Hill',
    skills: 'C#, SQL',
  },
];

const typeDefs = gql`
  type Developer {
    id: String
    name: String
    skills: String
  }

  type Query {
    developers: [Developer]
  }

  type Mutation {
    editDeveloper(id: String, name: String, skills: String): [Developer]
    addDeveloper(id: String, name: String, skills: String): [Developer]
    deleteDeveloper(id: String): [Developer]
  }
`;

const resolvers = {
  Query: {
    developers: () => developers,
  },

  Mutation: {
    addDeveloper: (_root, args) => {
      developers = [...developers, args];
      console.log(developers);
      return developers;
    },
    deleteDeveloper: (_root, args) => {
      const updatedDevelopers = developers.filter(
        (developer) => developer.id !== args.id
      );
      developers = updatedDevelopers;
      console.log(developers);
      return developers;
    },
    editDeveloper: (_root, args) => {
      const updatedDevelopers = developers.map((developer) =>
        developer.id === args.id ? args : developer
      );
      developers = updatedDevelopers;
      console.log(developers);
      return developers;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const startServer = server.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await server.createHandler({
    path: '/api/graphql-data',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
