//Init
const express=require('express')
const path=require('path')
const app=express()

//port of connection
const port=3000
//middleware

//engine
app.set('views',path.join(__dirname+'/views'))
app.set('view engine','pug')
//route
app.get('/',(req,res)=>{
let articles=[
	{
	  titles:"Titles1",
          articles:"Articles1"
	},
	{
	  titles:"Titles2",
	  articles:"Articles2"
	},
	{
	  titles:"Titles3",
	  articles:"Articles3"
	}
]
	res.render('index',{
		title:"root",
		content:"root content",
		articles:articles
	})
})
app.get('/home',(req,res)=>{
	res.render('home',{
		title:"home",
		content:"home content"
	})
})
//listen
app.listen(port,()=>{
console.log(`App running on port ${port}`)})
