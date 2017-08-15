let functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ionic3firebase.firebaseio.com"
});
//admin.initializeApp(functions.config().firebase);

exports.customAuth = functions.https.onRequest((req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });

  //document https://www.npmjs.com/package/cors
  let cors = require('cors')({
    "origin": "*",
    "methods": "PUT, GET, POST, OPTIONS",
    "allowedHeaders": "Content-Type, Authorization"
  });

  cors(req, res, () => {
    try {
      admin.auth().createCustomToken(req.query.uid)
        .then(function (customToken) {
          res.json({ 'token': customToken, 'status': true });
        })
        .catch(function (error) {
          res.json({ 'status': false, 'error': error });
        });

      //res.json({ 'token': 'lkk', 'status': true });
    } catch (err) {
      res.json({ 'error': err, 'status': false });
    }
  });
});

exports.adjustData = functions.https.onRequest((req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });

  //document https://www.npmjs.com/package/cors
  let cors = require('cors')({
    "origin": "*",
    "methods": "PUT, GET, POST, OPTIONS",
    "allowedHeaders": "Content-Type, Authorization"
  });

  cors(req, res, () => {
    let original = req.query.text;
    if (original) {
      original = original.toUpperCase();
    }
    res.json({ 'name': 'originaltext', 'get': 'data', 'data': original });
  });
});

exports.welcomeNewToken = functions.database.ref('/messages/{pushId}/ionic3firebase')
  .onWrite(event => {
    let data = event.data.val();
    let welcomeMessage = 'Welcome : ' + data;
    let token = event.params.pushId;
    let payload = {
      notification: {
        'title': 'Hello' + data,
        'body': welcomeMessage,
        'icon': 'notification_icon',
        'color': '#FE0000'
        //'click_action' : "http://localhost:8100/#/firebase-cloud-message"
      },
      data: {
        'content-available': '1',
        'name': data,
        'welcome': welcomeMessage
      }
    };
    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    if (token) {
      let status = '';
      admin.messaging().sendToDevice(token, payload, options).then(response => {
        status = "Successfully sent message";
        event.data.ref.parent.child('sendStatus').set(status);
      }).catch(error => {
        status = "Error sending message:" + error;
        event.data.ref.parent.child('sendStatus').set(status);
      });

    }

    /*      return new Promise( () => {
            resolve;
          });*/

    return event.data.ref.parent.child('sendWelcome').set('YES: ' + data);
  });

exports.receiveData = functions.https.onRequest((req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });

  //document https://www.npmjs.com/package/cors
  var cors = require('cors')({
    "origin": "*",
    "methods": "PUT, GET, POST, OPTIONS",
    "allowedHeaders": "Content-Type, Authorization"
  });

  cors(req, res, () => {
    res.json({ 'name': 'OK-' + req.body.name, 'address': 'OK-' + req.body.address, 'status': 'RECEIVED' });
  });
});

/*exports.log = functions.https.onRequest((req, res) => {

  let source = req.query.source ? req.query.source : 'NOSOURCE';
  let level = req.query.level ? req.query.level : 'INFO';
  let message = req.query.message;
  if (message) {
    switch (level) {
      case 'INFO':
        console.log(message);
        break;
      case 'DEBUG':
        console.debug(message);
        break;
      case 'ERROR':
        console.error(message);
        break;
    }
  }
});*/