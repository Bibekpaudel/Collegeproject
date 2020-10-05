const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path =require ('path')
console.log(__dirname)
console.log(path.join(__dirname ,'../views'))

const app = express();
const publicDirectoryPath=path.join(__dirname,'../views')

app.use(express.static(publicDirectoryPath))

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server up and running on port ${PORT}`));
