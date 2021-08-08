const express = require('express');
const path = express('path');


const app=express();



app.use(express.static(__dirname + '/dist/SaAngular'));

app.get('/*', function(req, res) { 
    res.sendFile('index.html', {root: 'dist/SaAngular/'} 
  ); 
  });


app.listen(process.env.PORT || 8080);
