const express = require('express');
const mustacheExpress = require('mustache-express');
var mongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/',function(req, res){
  mongoClient.connect("mongodb://127.0.0.1:27017/userdb", function(err, db) {
    if(err) { return console.dir(err); }
    else{
        var dbCollection = db.collection('user');
        dbCollection.find().toArray().then(function(user){
          res.render('main', {user: user});
        });
      }
  });
});

app.listen(3000, function () {
console.log('Successfully started express application!');
})
