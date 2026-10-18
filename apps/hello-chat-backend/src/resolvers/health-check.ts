import { SERVICE_NAME } from '../utils/common';

export const healthCheck = () => {
  console.log(SERVICE_NAME, 'Server is healthy...');
  return true;
};
