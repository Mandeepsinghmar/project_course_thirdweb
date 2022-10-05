import {
  useAddress,
  useMetamask,
  useEditionDrop,
  useClaimNFT,
  useNetwork,
  useNetworkMismatch,
  useUser,
  useLogin,
  useEdition,
  useContract,
} from '@thirdweb-dev/react';

import { ChainId } from '@thirdweb-dev/sdk';

export default function Login() {
  // Wallet & Network Information
  const address = useAddress();
  const connectWithMetamask = useMetamask();

  // Hooks to ensure user is on the right network
  const [, switchNetwork] = useNetwork();
  const networkMismatch = useNetworkMismatch();

  // For user to claim an NFT to then view the restricted content
  const editionDropContract = useEditionDrop(
  //   // '0x47c45872096d18B42481FFF079cBD926629E4b16' // replace this with your contract address
    '0x51BbF48E5Ee68516C4113382Fb47f2675955E080'
  );

  // const { contract } = useContract('0x51BbF48E5Ee68516C4113382Fb47f2675955E080');

  console.log(editionDropContract);

  // Hook to claim NFTs from the NFT drop (to allow users to claim and *then* view the restricted content)
  // const { mutate: claimNft, isLoading: isClaiming } = useClaimNFT(editionDropContract);
  const {
    mutate: claimNft,
    isLoading,
    error,
  } = useClaimNFT(editionDropContract);
  // Hooks to sign in with ethereum (auth SDK)
  const login = useLogin(); // Sign in
  const { user } = useUser(); // Get current user (unused on this page)

  if (error) {
    console.error("failed to claim nft", error);
  }

  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-3'>
      <h1 className='font-bold text-3xl'>Auth - NFT Gated Content</h1>
      <p className='text-xl py-2'>
        Serve exclusive content to users who own an NFT from your collection,
        using{' '}
        <b>
          <a
            href='https://portal.thirdweb.com/building-web3-apps/authenticating-users'
            target='_blank'
            rel='noopener noreferrer'
          >
            Auth
          </a>
        </b>
        !
      </p>

      <p className='text-xl py-2 border-b-[1px] border-gray-100'>
        You cannot access the main page unless you own an NFT from our
        collection!
      </p>

      <hr />

      {address ? (
        <>
          <p className='text-base'>Welcome, {address.slice(0, 6)}...</p>

          <button
            style={{ width: 256 }}
            className='w-[256px] bg-purple-500 px-4 py-3 rounded-full text-white text-xl font-medium'
            onClick={login}
          >
            Sign In
          </button>

          <p className='text-lg'>
            For demo purposes, you can claim an NFT from our collection below:
          </p>

          <button
            className='w-[180px] bg-purple-300 px-4 py-3 rounded-xl text-black text-xl font-medium'
            onClick={() => {
              if (networkMismatch) {
                switchNetwork(ChainId.Mumbai);
                return;
              }
              claimNft({
                quantity: 1,
                tokenId: 0,
                to: address,
              });
            }}
          >
            {!isLoading ? ' Claim An NFT' : 'Claiming...'}
          </button>
        </>
      ) : (
        <>
          <button
            style={{ width: 'fit-content', paddingRight: 16, paddingLeft: 16 }}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </button>
        </>
      )}
    </div>
  );
}
