const express     = require("express")
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const dburl = "mongodb://rajesh:password@ds257808.mlab.com:57808/heroku_q3zf2pf8"
const app = express();
var db;var mclient;
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}))

app.post('/user',(req,res) => {

      var db1 = mclient.db('resturant');
      var collection=db1.collection('users');

  const book = { author: req.body.email, title:req.body.name}
collection.insert(book,(err,results) => {
if(err) {
  res.send({'error': 'An error has occured'})
}
else{
  //res.send(result.ops[0])
  console.log("We are live poreteteetet"  + mclient);

}


})
console.log(req.body);
res.send('Hello')
})

MongoClient.connect(dburl,(err,client)  => {
  if(err) return console.log(err)
    mclient = client
  app.listen(port,() =>{
    console.log("The database Url is : "  + dburl);
    console.log("We are live port : "  + port);

  })
})
