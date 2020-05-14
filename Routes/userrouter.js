var express = require('express')
var router = express.Router();
var user = require('../modules/usermodule.js')




router.get('/user',(req,res)=>{
	user.find({},(err,data)=>{
		if(err)
		{
			console.log(err)
		}
		else{
			res.render('showuser',{userdetail:data})
		}
	})
})


router.post('/user',(req,res)=>{
	user.create(req.body,(err,data)=>{
		if(err)
		{
			console.log(err)
		}
		else{
			res.redirect('/api/user')
		}
	})
})



router.get('/user/:id',(req,res)=>{
	user.findById(req.params.id,(err,data)=>{
		if(err)
		{
			console.log(err)
		}
		else{
			console.log(data)
			res.render('singleuser',{user:data})
		}
	})

})


router.get('/user/:id/edit',(req,res)=>{
	user.findById(req.params.id,(err,data)=>{
		if(err)
		{
			console.log(err)
		}
		else{
			
			res.render('editform',{user:data})
		}
	})
	

})



router.put('/user/:id',(req,res)=>{
	user.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
		if(err)
			console.log(err)
		else{
			console.log(data)
			res.redirect('/api/user')
		}
	})
})


router.delete('/user/:id',(req,res)=>{
	user.findByIdAndRemove(req.params.id,function(err,del){
        if(err)
        console.log(err)
        else{
           res.redirect('/api/user');
        }
    })
})

router.get('/',(req,res)=>{
	res.render('userform')
})
















module.exports = router;