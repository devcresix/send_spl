const { PublicKey } = require("@solana/web3.js");

const {
  createAssociatedTokenAccAndTransferToken,
  transferToken,
} = require("./transfer");

const { selectRandom, patchTx } = require("./apiCalls");

createAssociatedTokenAccAndTransferToken(
  new PublicKey("FNm4hDgT6JE1ZtUqTa59njAEfxu9UJWCjYqtTuPNDSb3"),
  new PublicKey("7CH4uZ7MFm3iMhNmQFm8uFLPeF1jyscHzJ8MwprPFyvy")
);

exports.transfer = async () => {
  let;
};
