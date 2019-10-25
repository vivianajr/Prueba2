const express = require ('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 5000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/rutas', require('./routes/rutas'));



//starting the server
app.listen (app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});




