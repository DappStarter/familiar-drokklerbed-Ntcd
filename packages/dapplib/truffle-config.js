require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain mixture hunt forget swallow skate'; 
let testAccounts = [
"0x661268d62eb97c21cbcf97925562dbaf5fc7b67332ee06bb9fec287819457ea2",
"0x16bc57dfa75547da70f53636c6c58108b326ddac26a995056dc03bce57fd9d42",
"0x032cb7a2ab53cf009af349f89d00df42b8316db0ebef7fbb0176769a521d956c",
"0xcd3fb526bb3ddf871cd83c97199d308f85a5b31399b8a7c583fdac5d2983b27d",
"0x31291c3a13b640e6bb3a17debc0dcaac12525f11dc76d857ab4c5961d558d15f",
"0xcc89012d5c2ba6e1f033154e530b86e6b3fbdc7ff992c33681ccfe34a2fc55d6",
"0x94d0a0a1a3114b5c74d19ce6030a6c2288d7ccb35d3e6c90267a93864383b47b",
"0x76da2786a935a8bb328cbea7fa69562024875b1af2f4e39c9c4bd31338545685",
"0xd367d217105f2214313d82e6e1e194c3eeaaebdd9da6c3f4fced386435f6f7be",
"0xe814255abf6df892c7e42d8bfda5d0256d6f46474b3234004386cadc5b4b8a28"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


