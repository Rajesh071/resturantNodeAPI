const express     = require("express")
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');

const dburl = "mongodb://rajesh:password@ds257808.mlab.com:57808/heroku_q3zf2pf8";

const app = express();
var db;var mclient;
const port = 8010;
app.use(bodyParser.urlencoded({extended: true}))

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.post('/userProfile',(req,res) => {

      var db1 = mclient.db('heroku_q3zf2pf8');
      var collection=db1.collection('UserProfile');
      console.log("We are live 12" + collection);
      console.log("Response object is "  + res);

  const book = { author: req.body.email, title:req.body.name}
collection.insert(book,(err,results) => {
if(err) {
  res.send({'error': 'An error has occured'})
}
else{

  res.status(201).json(results.ops[0]);


}




})
console.log(req.body);
})

app.get('/',(req,res) => {
  res.send("use https://resturant-node-api.herokuapp.com/userProfile to create user");
})



MongoClient.connect(dburl,(err,client)  =>        {
                            if(err) return console.log(err)
                            mclient = client
                            app.listen(port,() =>{
                            console.log("The database Url is : "  + dburl);
                            console.log("We are live port : "  + port);

                            })
                            })
