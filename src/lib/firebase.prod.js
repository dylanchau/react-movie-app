import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyBTYUWEAlY_pJ5b6sFP3K2a6I7ECIsBUg4',
  authDomain: 'movie-app-33b29.firebaseapp.com',
  projectId: 'movie-app-33b29',
  storageBucket: 'movie-app-33b29.appspot.com',
  messagingSenderId: '329226518631',
  appId: '1:329226518631:web:c5d898f1b06c99758494c2',
}

const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)

export { firebase }
