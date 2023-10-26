const FCM = require('fcm-node')
const serverKey = require('./serverKey.json').token
// const serverKey = require('./serviceAccountKey.json')
const deviceTokens = require('./deviceToken.json').device

const fcm = new FCM(serverKey)

// console.log(serverKey)
// console.log(deviceTokens[0])
const message = {
    to: deviceTokens[0],
    // collapse_key: 'message_one',
    notification: {
        title: 'notification by fcm',
        body: 'fcm content body ja'
    },
    data: {
        read: 'false'
    }
}

/**
 * single
 */
fcm.send(message, function(err, response) {
    if (err) {
        console.log('Something has gone wrong! ', err)
    } else {
        console.log('Successfully sent with response ', response)
    }
})

/**
 * topic
 */
// fcm.subscribeToTopic(deviceTokens, 'client_ios', (err, response) => {
//     if (err) {
//         console.log('Something has gone wrong! ', err)
//     } else {
//         console.log('Successfully sent with response ', response)
//     }
// })