export default async function checkBalance(sdk, address) {
  const editionDrop = sdk.getEditionDrop(
    '0x51BbF48E5Ee68516C4113382Fb47f2675955E080' // replace this with your contract address
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
