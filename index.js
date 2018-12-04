//Required Modules
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//Sets styling engine to jade
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Not sure!?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//App pages for web
app.get('/', function (req, res) {
  res.render('index')
});

app.post('/', urlencodedParser, function (req, res) {
  console.log(req.body);

  //correct
  if(req.body.data == 16363){
    console.log("Correct");
  }
  //Not correct
  else{
    console.log("Incorrect");
  }

  setTimeout(function(){
    res.render('index', {data: req.body});
  }, 100)
});

//Load server on localhost 3000
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
