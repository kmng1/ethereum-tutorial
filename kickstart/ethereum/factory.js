import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xaF4f93De413099F22c93a03f04D1a024A82a3937'
);

export default instance;

