'user strict';
const 
        express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        passport = require('passport'),
        mongoose = require('mongoose'), 

        config = require('./config/database');

// Connect To Database


const 
        port = process.env.PORT || 8080,
        app = module.exports = express();
        
// CORS Middleware 
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);



// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
