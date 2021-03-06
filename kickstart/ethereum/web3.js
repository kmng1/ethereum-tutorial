import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // on the server OR user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/kBXF1IajToIwujOs7NKa'
  );
  web3 = new Web3(provider);

}


export default web3;
