const express = require('express')
const {MongoClient,ObjectID} = require('mongodb')
const assert = require('assert')

const app = express()
app.use(express.json())

const mongo_url='mongodb://localhost:27017'
const dataBase= "contact-api"


MongoClient.connect(mongo_url, { useUnifiedTopology: true },(err,client) => {
    assert.equal(err,null,'data base connexion failed')
    const db= client.db(dataBase)
 
//    ADD CONTACT 
app.post('/new_contact' ,(req,res) => {
let newcontact = req.body
db.collection('contact').insert(newcontact ,(err,data) => {
if (err) res.send('cant add contact')
else res.send(data)  
})
})
//    GET CONTACT 
app.get('/get_contact',(req,res) => {
 db.collection('contact').find().toArray((err,data) =>
 {if (err) res.send('cant fetch contact')
 else res.send(data)  } )
})    

//    MODIFY CONTACT 
app.put('/update_contact/:id',(req,res) => {
    db.collection('contact').findOneAndUpdate({_id:ObjectID(req.params.id)},{$set: {...req.body}}, (err,data) =>{
        
    if (err) res.send('cant find contact')
    else res.send('contact modified')})
 } )
//    DELETE CONTACT 
 app.delete('/delete_contact/:id',(req,res) => {
    db.collection('contact').findOneAndDelete({_id: ObjectID(req.params.id)},(err,data) => {
        if (err) res.send('cant delete contact')
        else res.send('contact deleted')  
    })
})


})
app.listen (5000, (err)=>{
    if (err ) console.log('server is not running')
    else console.log('server is running on port 5000')
})
