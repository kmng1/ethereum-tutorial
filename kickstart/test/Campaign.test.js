const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// workaround for web3 1.0.0-beata.26 <-----------------
// const web3 = new Web3(ganache.provider());
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy( {data: compiledFactory.bytecode} )
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  // const addresses = await factory.methods.getDeployedCampaigns().call();
  // campaignAddress = addresses[0];
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );

  // workaround for web3 1.0.0-beata.26 <-----------------
  factory.setProvider(provider);
  campaign.setProvider(provider);
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });




});

