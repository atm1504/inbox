const config = require("./config");// File that contain the login credentials

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(config.MNEMONIC, RINKBEY_URL);

// const web3 = new Web3(provider);
