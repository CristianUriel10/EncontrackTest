// Libraries.
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

/**
 * Endpoint
 */
/**
 * Endpoint to update the properties values for a nid.
 * @param  {object} hermesUpdateData model to update the properties.
 */

// Para el envio de notificaciones en dev
export const RNfirebaseConfig = {
  apiKey: 'AIzaSyDjuGB-lFJv3C9ZOL84hYsLVx7s0oUvoyw',
  authDomain: 'pagaloop-dev.firebaseapp.com',
  databaseURL: 'https://pagaloop-dev-default-rtdb.firebaseio.com',
  projectId: 'pagaloop-dev',
  storageBucket: 'pagaloop-dev.appspot.com',
  messagingSenderId: '250607820022',
  appId: '1:250607820022:web:e16dd1188c58df2ab820d7',
};

// Para el envio de notificaciones en prod
// export const RNfirebaseConfig = {
//   apiKey: 'AIzaSyCjpYTFM5wQhjpBQ6xvh5UZDef51_-Bxso',
//   authDomain: 'pagaloop-266ec.firebaseapp.com',
//   databaseURL: 'https://pagaloop-266ec.firebaseio.com',
//   projectId: 'pagaloop-266ec',
//   storageBucket: 'pagaloop-266ec.appspot.com',
//   messagingSenderId: '444095127914',
//   appId: '1:444095127914:web:a662f0d32d12a0725a4513',
// };

export const frequentQuestions = async () => {
  const configuration = await firebase
    .firestore()
    .collection('configuration')
    .doc('questions')
    .get();

  const answer = configuration._data.questions;

  return answer;
};

export const maintain = async () => {
  const configuration = await firebase
    .firestore()
    .collection('Pantallas')
    .doc('error_validate_app_in_maintenance')
    .get();

  const answer = configuration._data.result;

  return answer;
};

export const carousel = async () => {
  const configuration = await firebase
    .firestore()
    .collection('configuration')
    .doc('carousel')
    .collection('1')
    .doc('lanzamiento')
    .get();

  const answer = configuration._data;

  return answer;
};

export const calculator = async () => {
  const configuration = await firebase
    .firestore()
    .collection('configuration')
    .doc('payments')
    .get();

  const answer = configuration._data.minimum;

  return answer;
};

export const termsandconditions = async () => {
  const configuration = await firebase
    .firestore()
    .collection('configuration')
    .doc('termsOfService')
    .get();

  const answer = configuration._data.termsAndConditions;

  return answer;
};

export const announcementPrivacy = async () => {
  const configuration = await firebase
    .firestore()
    .collection('configuration')
    .doc('termsOfService')
    .get();

  const answer = configuration._data.NoticeOfPrivacy;

  return answer;
};

export const transactionInProcess = async () => {
  const configuration = await firebase
    .firestore()
    .collection('Pantallas')
    .doc('transaction_in_process')
    .get();

  const answer = configuration._data;

  return answer;
};

export const transactionErrorToPay = async () => {
  const configuration = await firebase
    .firestore()
    .collection('Pantallas')
    .doc('transaction_error_to_pay')
    .get();

  const answer = configuration._data;

  return answer;
};
