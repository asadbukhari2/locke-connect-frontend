import { Fetch } from '@/helpers/fetchWrapper';
import firebase from '@/utils/firebase';
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';

const auth = getAuth(firebase);

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const _url = `${process.env.NEXT_PUBLIC_API_URL}/routes/v1`;

const userService = {
  async signup(body) {
    let res = await Fetch.post(`${_url}/sign-up`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw message;
  },

  async signin({ email = '', password = '' }) {
    const email_lowercase = email.toLowerCase();
    const userCredential = await signInWithEmailAndPassword(auth, email_lowercase, password);
    const user = userCredential.user;
    return user;
  },
  async forgotPassword(email = '') {
    const email_lowercase = email.toLowerCase();
    await sendPasswordResetEmail(auth, email_lowercase);

    return true;
  },
  async resetPassword(code, password) {
    await confirmPasswordReset(auth, code, password);
  },

  async getCurrentUser() {
    let res = await Fetch.get(`${_url}/user`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw message;
  },

  async updateCurrentUser(body) {
    let res = await Fetch.patch(`${_url}/update-user`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw message;
  },

  async upload(body) {
    let res = await Fetch.upload(`${_url}/upload`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw message;
  },

  async uploadDocument(body) {
    let res = await Fetch.upload(`${_url}/upload-document`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw message;
  },

  async signout() {
    await signOut(auth);
  },
};

export default userService;
