import { typeDefs } from './graphql';
import { healthCheck } from './../resolvers';

const resolvers = {
  Query: {
    healthCheck,
  },
};

export { typeDefs, resolvers };
