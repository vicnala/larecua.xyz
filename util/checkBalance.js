import { contractAddress } from "../const";

export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getContract(
    contractAddress,
    "edition-drop"
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
