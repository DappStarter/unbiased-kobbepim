require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember hospital give basket foster split'; 
let testAccounts = [
"0x4583a3c1e76ca76d62c0156726502946f97adbc904f310a6516ff2562e782d91",
"0xc631e47d35c3c2eaad78b9d05ce959dca46530a0651b39e410e256ea141102fe",
"0x0c3512daf29ba7d2a0f6048e3a5055018e0f88874da1d45d50fd9c78acc32e1c",
"0x4b038f34747eb38100bedfa3da0243abd84ca64ea8fabf0100760abf977974d3",
"0xce8edeb59592d6b8cb981259441a8aadb978a24d3b1a43643c69054dd8244754",
"0x1339dc516f9dfe232ec84945eafaeae6b5bc1cafe5ecf2019cf8eb4995b02ec0",
"0xd06111d0e5172e959c8d44185a045264c761cbbb1e5425ccf817c245bd58e87f",
"0xe09b7c02f10fe79f7ccd6b49d54e2b31d830faca75ca5b3a0bb7d8bb873e1ff7",
"0x095009bfbf7ad21c7f481c7cec543a03e100b2e7a9ddf6483b5179f552fc1418",
"0xb6a163ab3fc5a93b3049398d45421fc97c33edfa19483a24b93923c2ec387607"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
