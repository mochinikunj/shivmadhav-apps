import { typeDefs } from './graphql';
import { healthCheck } from '@shivmadhav-apps/common';

const resolvers = {
  Query: {
    healthCheck,
  },
};

export { typeDefs, resolvers };
