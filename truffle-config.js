const HDWalletProvider = require("truffle-hdwallet-provider-klaytn")

/**
 * NETWORK_ID: Specifies the network id in Klaytn (1001 for Baobab)
 * URL: URL for the remote node you will be using
 * GASLIMIT: How much gas limit will you endure to deploy your contract
 */
// 배포하는 서버에 따라 다르게 줘야한다.
// const NETWORK_ID = '1001'
const NETWORK_ID = '8217'
const URL = 'https://klaytn03.fandom.finance'
const GASLIMIT = '8500000'

// https://klaytn03.fandom.finance/
// https://public-node-api.klaytnapi.com/v1/cypress
//rpcURL: 'https://api.baobab.klaytn.net:8651'
// rpcURL: 'https://api.cypress.klaytn.net:8651'
// truffle deploy --network baobab  # testnet
// truffle deploy --network cypress
/**
 * ** WARNING **
 * You shouldn't expose your private key. Otherwise, your account would be hacked.
 * PRIVATE_KEY: Private key of the account that pays for the transaction (Change it to your own private key)
 */
//const PRIVATE_KEY = '0x40ee87eb0bd42434b3f0a7e530b79099cd9fbbd303bdce9055d90fc901734fda'

const PRIVATE_KEY = '0x9b759901d776a2696355ac287534c3d56c7e7a87c9f02c0c1b2147b74146601f';


module.exports = {
  networks: {
    /**
     * 1. DEPLOY METHOD 1: By private key
     * If you want to deploy your contract using the private key, `provider` option is needed.
     * 1) Pass your private key as the 1st argument of `new HDWalletProvider()`.
     * 2) Pass your Klaytn node's URL as the 2nd argument of `new HDWalletProvider()`.
     *
     * If you deploy your contract with private key connector,
     * You don't need to set `host`, `port`, `from` option.
     */
    // 배포하는 서버에 따라 다르게 줘야한다.
    // baobab: {
    //   provider: () => new HDWalletProvider(PRIVATE_KEY, URL),
    //   network_id: NETWORK_ID,
    //   gas: GASLIMIT,
    //   gasPrice: null,
    // },
    cypress: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    },

    /**
     * 2. DEPLOY METHOD 2: By unlocked account
     * You must set `host`, `port`, `from` option
     * to deploy your contract with unlocked account.
     *
     * If you deploy your contract with unlocked account on klaytn node,
     * You don't need to set `provider` option.
     */
    // baobab: {
    //   host: HOST,
    //   port: PORT,
    //   network_id: NETWORK_ID,
    //   from: FROM,
    //   gas: GASLIMIT,
    //   gasPrice: null,
    // },

  },
  // 3. Specify the version of compiler, we use 0.5.6
  compilers: {
    solc: {
      version: '0.5.6',
    },
  },
}
