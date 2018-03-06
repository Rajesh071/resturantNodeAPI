const express     = require("express")
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');

const dburl = "mongodb://heroku_q3zf2pf8:3fa8k6dpfpdpd0le1tl9ujn268@ds257808.mlab.com:57808/heroku_q3zf2pf8?authSource=dbWithUserCredentials";

const app = express();
var db;var mclient;
//mongodb://heroku_q3zf2pf8:3fa8k6dpfpdpd0le1tl9ujn268@ds257808.mlab.com:57808/heroku_q3zf2pf8
const port = 8010;
app.use(bodyParser.urlencoded({extended: true}))

app.post('/user',(req,res) =>       {

                                      var db1 = mclient.db('resturant');
                                      var collection=db1.collection('users');

                                      const userdetails = { author: req.body.email, title:req.body.name}
                                      collection.insert(userdetails,(err,result) => {
                                          if(err) {
                                              res.send({'error': 'An error has occured'})
                                              console.log("" + err);

                                            }
                                          else{
                                            //res.send(result.ops[0])
                                          //  console.log("We are live poreteteetet"  + mclient);
                                            }
})
                                    console.log(req.body);
                                      //res.send('Hello')
                                      })

MongoClient.connect(dburl,(err,client)  =>        {
                            if(err) return console.log(err)
                            mclient = client
                            app.listen(port,() =>{
                            console.log("The database Url is : "  + dburl);
                            console.log("We are live port : "  + port);

                            })
                            })
