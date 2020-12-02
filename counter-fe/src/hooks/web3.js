import Web3 from "web3";

export const useWeb3 = (provider, account) => {
  const web3 = new Web3(provider);

  web3.eth.defaultAccount = account;

  return web3;
};

export const useContract = (web3, abi, address) => {
  return new web3.eth.Contract(abi, address);
};
