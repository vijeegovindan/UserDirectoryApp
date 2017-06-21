const dataFile = require('./data.js');
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/',function(req, res){
res.render('main', dataFile);
});

app.listen(3000, function () {
console.log('Successfully started express application!');
})
