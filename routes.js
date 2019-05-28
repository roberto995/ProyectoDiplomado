//const express = require('express');
//const router= express.Router();
//const routes = require('./routes');
 

module.exports=(app, passport)=>{
   
    app.get('/', (req, res) => {res.send('Hello World!')})
    
    app.get('/login', (req, res) => {
        res.render('login.ejs')
        });
        

        app.get('/MisPacientes', (req, res) => {
            res.render('MisPacientes.ejs')
        })
        app.get('/MisConsultas', (req, res) => {
            res.render('MisConsultas.ejs')
        })
        app.get('/ExamenesMedicos', (req, res) => {
            res.render('ExamenesMedicos.ejs')
        })
        app.get('/iDOCTOR', (req, res) => {
            res.render('Home.ejs')
        })

}

 
