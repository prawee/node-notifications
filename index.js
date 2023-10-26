const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
const deviceToken = require('./deviceToken.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

console.log(deviceToken.device)

const topic = 'Send by Topic'
const payload = {
    notification: {
        title: 'My Notification #1',
        body: 'Hi, this is notification #1',
        sound: 'default',
        badge: '5'
    }
}

/**
 * mode to send
 * device, topics, all, some
 */
const sendBy = 'all';

/**
 * send with devices
 */
if (sendBy == 'device' ) {
    admin.messaging().sendToDevice(deviceToken.device, payload)
        .then((response) => {
            console.log('Sent is successfully.\n', response)
        })
        .catch((error) => {
            console.log('Sent is failed.\n ', error)
        })
}

/**
 * send with topics
 */
if (sendBy == 'topics') {
    admin.messaging().sendToTopic(topic, payload)
        .then((response) => {
            console.log('Sent is successfully\n ', response)
        })
        .catch((error) => {
            console.log('Sent is failed\n ', error)
        })
}

/**
 * send specific devices
 */
if (sendBy == 'some') {
    admin.messaging().send({
        data: {
            score: '850',
            time: '2:45'
        },
        token: deviceToken.device[0]
    })
    .then((response) => {
        console.log('Sent is successfully\n ', response)
    })
    .catch((error) => {
        console.log('Sent is failed\n ', error)
    })
}

/**
 * send to multiple devices
 */
if (sendBy == 'all') {
    admin.messaging().sendMulticast({
        data: {
            score: '850',
            time: '2:45'
        },
        tokens: deviceToken.device
    })
    .then((response) => {
        console.log('Sent is successfully\n ', response)
    })
    .catch((error) => {
        console.log('Sent is failed\n ', error)
    })
}