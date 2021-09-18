require("dotenv").config();
const web3 = require("@solana/web3.js");
const bs58 = require("bs58");

exports.connection = new web3.Connection(
  web3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);

exports.fromWallet = web3.Keypair.fromSecretKey(bs58.decode(process.env.PK));
