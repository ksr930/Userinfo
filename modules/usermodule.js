var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	name:{
		type:String
	},
	status:{
		type:String
	}
  ,
  Phone_no:{
         type:Number
  }

})

var user = mongoose.model('user',userSchema);

module.exports = user