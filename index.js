var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
let contacts=[{name:'arun',phone:'9591710418',email:'rsarunit@gmail.com'},
{name:'arun',phone:'9591410418',email:'rsarunit@gmail.com'},
{name:'arun',phone:'9591410418',email:'rsarunit@gmail.com'}];
// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/server/', function (req, res) {
    res.status(200).send({ service: 'Test', isAlive: true });
}); 

app.post('/server/addContact', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
    contacts.push(request.body);
  });

app.get('/server/getContacts',function(req,res){
   res.status(200).send(contacts);
});

var port     = 8080; // set our port
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
