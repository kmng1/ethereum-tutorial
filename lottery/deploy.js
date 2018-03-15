const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'welcome flower mom employ slab ugly scale wine wise correct thunder document',
  'https://rinkeby.infura.io/kBXF1IajToIwujOs7NKa'
);

const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account: ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( {data: bytecode } )
    .send({ from: accounts[0], gas: '1000000' });

  console.log(interface);
  console.log('Contract deployed to ', result.options.address)
};

deploy();
