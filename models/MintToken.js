let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var MintToken = new Schema(
    {
        Token: {
            type: String,
            required : true,            
            unique: true
        },        
        Txn :
        {
            type: String,
            required : true,            
            unique: true
        },
        IsActive :
        {
            type: Boolean,
            require: true,
        },
        IsTransfered :
        {
            type: Boolean,
            require: true,
        },
        UserAddress :
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

module.exports = mongoose.model('MintToken', MintToken);