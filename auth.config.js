import { ThirdwebAuth } from '@thirdweb-dev/auth/next';

// Replace this with your contract address
export const contractAddress = '0x51BbF48E5Ee68516C4113382Fb47f2675955E080';

// Replace this with your domain name (or any other name you want)
export const domainName = 'example.org';

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || '24cdae9693211bc930dc4b7740e8e2076578b01060da90746fedfd911534710c',
  domain: domainName,
});
