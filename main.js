var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
const session = require('express-session');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("BD CONECTADA . . . .!");
});


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
	res.render('index.ejs',{
		title: 'costumers'
	});
});
 
var puerto = 3000;
app.listen(3000, function(){
	console.log('Proyecto Final INICIANDO EN PUERTO ' + puerto);
})