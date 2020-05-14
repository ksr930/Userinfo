const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-Parser')
const userroutes = require('./modules/usermodule.js')
const routes = require('./Routes/userrouter.js')
var methodoverride = require("method-override")

const app = express();


 app.use(bodyParser.urlencoded({extended:true}));


app.use(methodoverride("_method"))


 app.set("view engine","ejs")


app.get('',(req,res)=>{
	res.render('landing')
})


app.use('/api',routes)
var uri =process.env.MONGODB_URI;


mongoose.connect(uri)





var port=process.env.PORT||5000;
app.listen(port,(err)=>{
	if(!err)
	{
		console.log('server connected')
	}
})