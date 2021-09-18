const ClaimToken = require("../models/ClaimToken");

exports.getRandom = async () => {
  return ClaimToken.findOne({ IsTransfered: false, IsRequested: true }).then(
    (claimToken) => {
      return claimToken;
    }
  );
};

exports.setTransferred = async (userAddress) => {
  await ClaimToken.updateOne(
    { UserAddress: userAddress },
    { IsTransfered: true }
  ).exec();
};
