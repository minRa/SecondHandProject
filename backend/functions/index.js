const functions = require('firebase-functions');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = require('express')();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


// path 
const {payment}= require('./handlers/stripe');

// route
app.post('/payment', payment);

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

//exports.shs = functions.region('us-central1').https.onRequest(app);