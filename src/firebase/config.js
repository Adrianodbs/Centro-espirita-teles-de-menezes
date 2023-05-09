import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCU3WTDMGYl9JhNNGGyJdjTcdN-LTc3xEQ',
  authDomain: 'centro-espirita-8336c.firebaseapp.com',
  projectId: 'centro-espirita-8336c',
  storageBucket: 'centro-espirita-8336c.appspot.com',
  messagingSenderId: '125624636485',
  appId: '1:125624636485:web:c824f74765aecfdb53bf2c'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
