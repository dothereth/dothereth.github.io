const provider = new WalletConnectProvider({
  rpc: {
    1: 'https://mainnet.infura.io/v3/23505897e91d4f858f48eb1a4501904d',
  },
});

document.getElementById('connectButton').addEventListener('click', () => {
  provider.enable().then(() => {
    const web3 = new Web3(provider);
    web3.eth.getAccounts().then(accounts => {
      const userAddress = accounts[0];
      // Perform operations with the connected wallet
    });
  });
});
