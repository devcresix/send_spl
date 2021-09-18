let mongoose = require("mongoose");

let Schema = mongoose.Schema;

var ClaimToken = new Schema(
  {
    UserAddress: {
      type: String,
      required: true,
      unique: true,
    },
    IsRequested: {
      type: Boolean,
      require: true,
    },
    HasTransfered: {
      type: Boolean,
      require: true,
    },
    CeratedDate: {
      type: Date,
      require: true,
    },
    UpdatedDate: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ClaimToken", ClaimToken);
