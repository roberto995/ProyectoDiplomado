var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

//VIEW ENGINE
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//BODY PARSER MIDDLEWARESS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static files PATH
app.use(express.static(path.join(__dirname, 'staticFiles')));

app.get('/',function(req, res){
	res.render('index');
});
 
app.listen(3000, function(){
	console.log('Proyecto Final INICIANDO . . .');
})