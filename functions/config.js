const functions = require('firebase-functions')
const admin = require('firebase-admin')

const config = {
  apiKey: 'AIzaSyCc5Mxs3q2EsTgmrOETp5sAN6z1igh6mlk',
  authDomain: 'cards-3edec.firebaseapp.com',
  databaseURL: 'https://cards-3edec.firebaseio.com',
  projectId: 'cards-3edec',
  storageBucket: 'cards-3edec.appspot.com',
  messagingSenderId: '546407622501',
  appId: '1:546407622501:web:180600ee81b22116'
}

admin.initializeApp(config)

module.exports.admin = admin
