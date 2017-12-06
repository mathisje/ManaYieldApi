let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/manaYieldRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);