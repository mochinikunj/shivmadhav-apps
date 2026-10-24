import { SERVICE_NAME } from '@shivmadhav-apps/configs';

export const healthCheck = () => {
  console.log(SERVICE_NAME, 'Server is healthy...');
  return true;
};
