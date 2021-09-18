let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var LizzyFund = new Schema(
    {
        UserAddress: {
            type: String,
            required : true,            
            unique: true
        },
        SolAmount :
        {
            type: Number,
            require: true,
        },
        FundTxn :
        {
            type: String,
            required : true,            
            unique: true
        },
        ShouldSendNFT :
        {
            type: Boolean,
            require: true,
        },
        IsTransfered :
        {
            type: Boolean,
            require: true,
        },
        NFTToken :
        {
            type: String,
        },
		
		CeratedDate : {
			type :Date,
			require: true,
		},
		UpdatedDate : {
			type :Date,
			require: true,
		}
    }, 
    {
        timestamps: true
    });

module.exports = mongoose.model('LizzyFund', LizzyFund);