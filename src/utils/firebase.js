import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC3qN6ez6srkws15Y8WS5krVWsTcOAZAG8',
  authDomain: 'locke-9d934.firebaseapp.com',
  projectId: 'locke-9d934',
  storageBucket: 'locke-9d934.firebasestorage.app',
  messagingSenderId: '42268287385',
  appId: '1:42268287385:web:97a69682d313aaba37f308',
  measurementId: 'G-GJJ8JE2JY7',
};

const firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;
