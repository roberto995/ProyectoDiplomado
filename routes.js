module.exports=(app, passport)=>{
   
    app.get('/MisPacientes', (req, res) => {
            res.render('MisPacientes.ejs')
        })
    
    app.get('/login', (req, res) => {
        res.render('login.ejs')
        });        
    app.get('/MisPacientes', (req, res) => {
            res.render('MisPacientes.ejs')
    });
    app.get('/MisConsultas', (req, res) => {
            res.render('MisConsultas.ejs')
    });
    app.get('/ExamenesMedicos', (req, res) => {
       res.render('ExamenesMedicos.ejs')
    });     
        
        

}

 
