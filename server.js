let bodyParser = require('body-parser');
let cors = require('cors');
let express = require('express');
let app = express();
let port = process.env.PORT || 3001;
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

let routes = require('./api/routes/manaYieldRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);