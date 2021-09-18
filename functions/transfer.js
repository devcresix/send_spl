const splToken = require("@solana/spl-token");
const {
  PublicKey,
  Transaction,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");

const { fromWallet, connection } = require("../config/web3/index");

const getAssociatedTokenAccount = async (owner, token) => {
  return await splToken.Token.getAssociatedTokenAddress(
    splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
    splToken.TOKEN_PROGRAM_ID,
    token,
    owner
  );
};

const associatedTokenInstructions = (owner, token, toTokenAccount) => {
  return splToken.Token.createAssociatedTokenAccountInstruction(
    splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
    splToken.TOKEN_PROGRAM_ID,
    token,
    toTokenAccount,
    owner,
    fromWallet.publicKey
  );
};

const transferTokenInstructions = (token, fromTokenAccount, toTokenAccount) => {
  return splToken.Token.createTransferInstruction(
    splToken.TOKEN_PROGRAM_ID,
    fromTokenAccount,
    toTokenAccount,
    fromWallet.publicKey,
    [],
    1
  );
};

exports.createAssociatedTokenAccAndTransferToken = async (toAccount, token) => {
  let transaction = new Transaction();
  let fromTokenAccount = await getAssociatedTokenAccount(
    fromWallet.publicKey,
    token
  );
  let toTokenAccount = await getAssociatedTokenAccount(toAccount, token);

  transaction.add(
    associatedTokenInstructions(toAccount, token, toTokenAccount)
  );

  transaction.add(
    transferTokenInstructions(token, fromTokenAccount, toTokenAccount)
  );

  var signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: "confirmed" }
  );
  return signature;
};

exports.createAssociatedTokenAccAndTransferTokenMulti = async (
  toAccounts,
  tokens
) => {
  let transaction = new Transaction();

  for (let i = 0; i < toAccounts.length; i++) {
    let token = tokens[i];
    let toAccount = toAccounts[i];

    let fromTokenAccount = await getAssociatedTokenAccount(
      fromWallet.publicKey,
      token
    );
    let toTokenAccount = await getAssociatedTokenAccount(toAccount, token);

    transaction.add(
      associatedTokenInstructions(toAccount, token, toTokenAccount)
    );
    transaction.add(
      transferTokenInstructions(token, fromTokenAccount, toTokenAccount)
    );
  }

  var signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: "confirmed" }
  );
  return signature;
};

exports.transferToken = async (toAccount, token) => {
  let transaction = new Transaction();
  let fromTokenAccount = await getAssociatedTokenAccount(
    fromWallet.publicKey,
    token
  );
  let toTokenAccount = await getAssociatedTokenAccount(toAccount, token);

  transaction.add(
    transferTokenInstructions(token, fromTokenAccount, toTokenAccount)
  );

  var signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
    { commitment: "confirmed" }
  );
  return signature;
};
