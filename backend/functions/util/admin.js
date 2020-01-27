var admin = require("firebase-admin");

var serviceAccount = require("../key/react-secondhandshop-firebase-adminsdk-1zh6k-5c8e03cc7d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://socialape-1b3ab.firebaseio.com"
});
const db = admin.firestore();

module.exports = { admin, db };
