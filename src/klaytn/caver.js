/**
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
 import Caver from 'caver-js'

 //테스트넷
//  const BAOBAB_TESTNET_RPC_URL = 'http://api.baobab.klaytn.net:8651/'
//  const rpcURL = BAOBAB_TESTNET_RPC_URL;

 //메인넷
 const MIANNET = 'https://public-node-api.klaytnapi.com/v1/cypress'
 const rpcURL = MIANNET
 
 const caver = new Caver(rpcURL);

// const caver = new Caver.providers.HttpProvider(rpcURL);
 
 export default caver
 