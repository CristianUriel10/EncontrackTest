// Types.
import {
  TERMS_AND_CONDITIONS_LOADING,
  TERMS_AND_CONDITIONS_ERROR,
  TERMS_AND_CONDITIONS_SUCCESS,
  ANNOUNCEMENT_OF_PRIVACY_LOADING,
  ANNOUNCEMENT_OF_PRIVACY_ERROR,
  ANNOUNCEMENT_OF_PRIVACY_SUCCESS,
  CALCULATOR_LOADING,
  CALCULATOR_ERROR,
  CALCULATOR_SUCCESS,
  CAROUSEL_LOADING,
  CAROUSEL_ERROR,
  CAROUSEL_SUCCESS,
  FREQUENT_QUESTIONS_LOADING,
  FREQUENT_QUESTIONS_ERROR,
  FREQUENT_QUESTIONS_SUCCESS,
  MANTAIN_LOADING,
  MANTAIN_ERROR,
  MANTAIN_SUCCESS,
  TRANSACTION_IN_PROCESS_LOADING,
  TRANSACTION_IN_PROCESS_ERROR,
  TRANSACTION_IN_PROCESS_SUCCESS,
  TRANSACTION_ERROR_TO_PAY_LOADING,
  TRANSACTION_ERROR_TO_PAY_SUCCESS,
  TRANSACTION_ERROR_TO_PAY_ERROR
} from './firebase.types';

// Endpoints.
import {
  termsandconditions,
  announcementPrivacy,
  calculator,
  carousel,
  frequentQuestions,
  maintain,
  transactionInProcess,
  transactionErrorToPay
} from './firebase.api';

export const actionFrequentQuestions = () => async dispatch => {
  dispatch({
    type: FREQUENT_QUESTIONS_LOADING,
  });
  await frequentQuestions()
    .then(response => {
      dispatch({
        type: FREQUENT_QUESTIONS_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: FREQUENT_QUESTIONS_ERROR,
        payload: e,
      });
    });
};

export const actionMantain = () => async dispatch => {
  dispatch({
    type: MANTAIN_LOADING,
  });
  await maintain()
    .then(response => {
      dispatch({
        type: MANTAIN_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: MANTAIN_ERROR,
        payload: e,
      });
    });
};

export const actionCarousel = () => async dispatch => {
  dispatch({
    type: CAROUSEL_LOADING,
  });
  await carousel()
    .then(response => {
      dispatch({
        type: CAROUSEL_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: CAROUSEL_ERROR,
        payload: e,
      });
    });
};

export const actionCalculator = () => async dispatch => {
  dispatch({
    type: CALCULATOR_LOADING,
  });
  await calculator()
    .then(response => {
      dispatch({
        type: CALCULATOR_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: CALCULATOR_ERROR,
        payload: e,
      });
    });
};

export const actionTermsAndConditions = () => async dispatch => {
  dispatch({
    type: TERMS_AND_CONDITIONS_LOADING,
  });
  await termsandconditions()
    .then(response => {
      dispatch({
        type: TERMS_AND_CONDITIONS_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: TERMS_AND_CONDITIONS_ERROR,
        payload: e,
      });
    });
};

export const actionAnnouncementOfPrivacy = () => async dispatch => {
  dispatch({
    type: ANNOUNCEMENT_OF_PRIVACY_LOADING,
  });
  await announcementPrivacy()
    .then(response => {
      dispatch({
        type: ANNOUNCEMENT_OF_PRIVACY_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: ANNOUNCEMENT_OF_PRIVACY_ERROR,
        payload: e,
      });
    });
};

export const actionTransactionInProcess = () => async dispatch => {
  dispatch({
    type: TRANSACTION_IN_PROCESS_LOADING,
  });
  await transactionInProcess()
    .then(response => {
      dispatch({
        type: TRANSACTION_IN_PROCESS_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: TRANSACTION_IN_PROCESS_ERROR,
        payload: e,
      });
    });
};

export const actionTransactionErrorToPay = () => async dispatch => {
  dispatch({
    type: TRANSACTION_ERROR_TO_PAY_LOADING,
  });
  await transactionErrorToPay()
    .then(response => {
      dispatch({
        type: TRANSACTION_ERROR_TO_PAY_SUCCESS,
        payload: response,
      });
    })
    .catch(e => {
      dispatch({
        type: TRANSACTION_ERROR_TO_PAY_ERROR,
        payload: e,
      });
    });
};


