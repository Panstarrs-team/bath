const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

// const adminCredentials = require('../.google.json')

// const admin = require('firebase-admin')
const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/auth')

let posts

const config = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIRE_AUTH_DOMAIN,
  databaseURL: process.env.FIRE_DATABASE_URL,
  projectId: process.env.FIRE_PROJECT_ID,
  storageBucket: process.env.FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_MESSAGING_SENDER_ID,
  appId: process.env.FIRE_APP_ID,
  measurementId: process.env.FIRE_MEASUREMENT_ID
}

async function initFirebase() {
  if (!firebase.apps.length) {
    await firebase.initializeApp(config)
  }
  await firebase.firestore()

  const db = firebase
    .firestore()
    .collection('versions')
    .doc('1')
    .collection('article')
  let postList = {}
  await firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('auth', errorCode, errorMessage)
    })

  firebase.auth().onAuthStateChanged(function() {
    db.where('isPublished', '==', true)
      .where(
        'publishedAt',
        '<=',
        firebase.firestore.Timestamp.fromDate(new Date())
      )
      .limit(3)
      .orderBy('publishedAt')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach((doc, i) => {
          let pageId = doc._document.proto.name.split('/')
          pageId = pageId[pageId.length - 1]
          postList[pageId] = doc.data()
        })
      })
      .catch((error) => {
        throw new Error(error)
      })
  })
  posts = postList
}

initFirebase()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.redirect('/')
})

app.get('/recommended', (req, res) => {
  res.send(posts)
})

app.get('/bath', async (req, res) => {
  let bathInfo
  const bathID = req.query.id
  const bathSnapshot = await firebase
    .firestore()
    .collection('versions/1/article')
    .doc(bathID)
    .get()
    .catch((err) => {
      return err.code
    })

  if (typeof bathSnapshot === 'string') {
    bathSnapshot === 'permission-denied'
      ? res.redirect(req.path, 404)
      : res.redirect(req.path, 500)
  } else {
    bathInfo = bathSnapshot.data()
    res.send(bathInfo)
  }
})

module.exports = {
  path: '/api',
  handler: app
}
