const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening
var bodyParser = require('body-parser');
var cors = require ('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});


// configure app.use()
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));


// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // Added delete to allow delete operaion from non browser client
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });



// Require people routes
const routes = require('./src/router/routes')
// using as middleware
app.use('/api/v1/peoples', routes)


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'People APIs - NuvertOS',
      version: '1.0.0',
      description: 'People API as assignment of NuvertOS'
    },
    servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
  };
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/router/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);  
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  
//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});



app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});














//npm i mysql
//start mysql server >> mysql-installer-community-8.0.27.1.msi 
// check in workbench if database connection created successfully
// ===========================================================================
// Error: 
// code: 'ER_NOT_SUPPORTED_AUTH_MODE',
//   errno: 1251,
//   sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
//   sqlState: '08004',
//   fatal: true


// You have to reconfigure MySQL Server. for that follow these steps.

// 1) Open mysql intsaller.

// 2) Click on Reconfigure (to the left mysql server)

// 3) Go to Authentication method tab (by clicking on Next twice.)

// 4) Then select the radio button Use Legacy Authentication Method. Click Next.

// 5) Enter your password. Click on Check. Go to Apply Configuration (by clicking on Next twice).

// 6) Click on Execute. Then Finish.

//=================================================================