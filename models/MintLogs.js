let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var MintLogs = new Schema(
    {
        ImageId: {
            type: String,
            required : true,
        },        
        Message :
        {
            type: String,
            required : true,
        },
        Status :
        {
            type: Boolean, // success or failed
            require: true,
        },        		
		CeratedDate : {
			type :Date,
			require: true,
		},
    }, 
    {
        timestamps: true
    });

module.exports = mongoose.model('MintLogs', MintLogs);