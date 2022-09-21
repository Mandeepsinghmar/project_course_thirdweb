import React from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useLogout } from '@thirdweb-dev/react';
import { getUser } from '../auth.config';
import checkBalance from '../util/checkBalance';
import LeftNavbar from '../components/LeftNavbar';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
  // const logout = useLogout();

  return (
    <div className='bg-dark-bg flex'>
      <LeftNavbar />
      <RightSidebar />
    </div>
  );
}

// This gets called on every request
// export async function getServerSideProps(context) {
//   const user = await getUser(context.req);

//   if (!user) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // Ensure we are able to generate an auth token using our private key instantiated SDK
//   const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
//   if (!PRIVATE_KEY) {
//     throw new Error('You need to add an PRIVATE_KEY environment variable.');
//   }

//   // Instantiate our SDK
//   const sdk = ThirdwebSDK.fromPrivateKey(
//     process.env.THIRDWEB_AUTH_PRIVATE_KEY,
//     'mumbai'
//   );

//   // Check to see if the user has an NFT
//   const hasNft = await checkBalance(sdk, user.address);

//   // If they don't have an NFT, redirect them to the login page
//   console.log('User', user.address, "doesn't have an NFT! Redirecting...");
//   if (!hasNft) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   // Finally, return the props
//   return {
//     props: {},
//   };
// }
