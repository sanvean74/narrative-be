const admin = require('firebase-admin');
const serviceAccount = JSON.parse(decodeURIComponent(process.env.ACCOUNT_KEY));
console.log(serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;