//Init
const express=require('express')
const path=require('path')
const app=express()

//port of connection
const port=3000
//middleware

//engine
app.set('views',path.join(__dirname+'views'))
app.set('view engine',pug)
//route
app.get('/',(req,res)=>{
res.render('index')})
//listen
app.listen(port,()=>{
console.log(`App running on port ${port}`)})
