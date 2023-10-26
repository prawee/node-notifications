const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
const deviceToken = require('./deviceToken.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

console.log(deviceToken.device)