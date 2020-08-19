const express=require('express')
const exphbs=require('express-handlebars')
const bodyParser = require('body-parser')
const path=require('path')
const app=express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs')


var pathTopublic=path.join(__dirname,'public')
console.log(pathTopublic)

app.use(express.static(pathTopublic))
app.set('view engine','hbs')
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
})); 


app.post('/saveData',function(req,res){
  let user=req.body.username;
  let pass=req.body.password;
    res.render('home',{fullname:user+' '+pass})
})

app.get('/', (req, res) => {
    
    res.render('home');

});

app.listen(5000, () => {
    console.log('The web server has started on port 5000');
});