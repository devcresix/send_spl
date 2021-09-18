const { PublicKey } = require("@solana/web3.js");

const {
  createAssociatedTokenAccAndTransferToken,
  createAssociatedTokenAccAndTransferTokenMulti,
  transferToken,
} = require("./functions/transfer");

const fetched = require("./config/constants/owners.json");
const minted = require("./config/constants/minted.json");

console.log(fetched.length, minted.length);

(async function transfer() {
  for (let i = 0; i < fetched.length; i++) {
    let toAccount = fetched[i].owner;
    let token = minted[i];

    try {
      let sig = await createAssociatedTokenAccAndTransferToken(
        new PublicKey(toAccount),
        new PublicKey(token)
      );
      console.log(sig);
      await delay(30000);
    } catch (e) {
      console.log(e);
    }
  }
})();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
