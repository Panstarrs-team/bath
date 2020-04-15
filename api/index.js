const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const adminCredentials = require('../.google.json')

const admin = require('firebase-admin')
const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/auth')

let recommendedPosts
let nostalgicPosts

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
  const postList = []
  await firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('auth', errorCode, errorMessage)
    })

  await firebase.auth().onAuthStateChanged(function() {
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
          postList.push(doc.data())
        })
      })
      .catch((error) => {
        throw new Error(error)
      })
  })

  recommendedPosts = postList
  nostalgicPosts = postList
}

initFirebase()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.redirect('/')
})

app.get('/recommended', (req, res) => {
  res.send(recommendedPosts)
})

app.get('/nostalgic', (req, res) => {
  res.send(nostalgicPosts)
})

module.exports = {
  path: '/api',
  handler: app
}
