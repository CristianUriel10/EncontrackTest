// Types.
import {anounsmentPrivacy, transactionErrorToPay} from './firebase.api';
import {
  TERMS_AND_CONDITIONS_LOADING,
  TERMS_AND_CONDITIONS_ERROR,
  TERMS_AND_CONDITIONS_SUCCESS,
  ANNOUNCEMENT_OF_PRIVACY_LOADING,
  ANNOUNCEMENT_OF_PRIVACY_SUCCESS,
  ANNOUNCEMENT_OF_PRIVACY_ERROR,
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
  TRANSACTION_ERROR_TO_PAY_ERROR,
  TRANSACTION_ERROR_TO_PAY_SUCCESS
} from './firebase.types';

/**
 * Object to manage the initial state for lead reducer.
 * {Object} apiActions manage the state for the endpoint.
 */
const INITIAL_STATE = {
  apiActions: {
    loading: false,
    error: '',
    success: false,
  },
  termsConditionsData: null,
  announcementPrivacy: null,
  calculator: null,
  carousel: null,
  frequentQuestions: null,
  maintain: null,
  transactionInProcess: null,
  transactionErrorToPay: null
};

/**
 * Manage the initial state for lead reducer.
 * @param  {Object} state is the initial state for the reducer.
 * @param {string} type action to take.
 * @param {Object} payload response for a action.
 */
const firebaseReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FREQUENT_QUESTIONS_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case FREQUENT_QUESTIONS_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case FREQUENT_QUESTIONS_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        frequentQuestions: payload,
      };
    case MANTAIN_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case MANTAIN_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case MANTAIN_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        maintain: payload,
      };
    case CAROUSEL_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case CAROUSEL_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case CAROUSEL_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        carousel: payload,
      };
    case CALCULATOR_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case CALCULATOR_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case CALCULATOR_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        calculator: payload,
      };
    case TERMS_AND_CONDITIONS_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case TERMS_AND_CONDITIONS_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case TERMS_AND_CONDITIONS_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        termsConditionsData: payload,
      };
    case ANNOUNCEMENT_OF_PRIVACY_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case ANNOUNCEMENT_OF_PRIVACY_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case ANNOUNCEMENT_OF_PRIVACY_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        announcementPrivacy: payload,
      };
    case TRANSACTION_IN_PROCESS_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case TRANSACTION_IN_PROCESS_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case TRANSACTION_IN_PROCESS_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        transactionInProcess: payload,
      };      
      case TRANSACTION_ERROR_TO_PAY_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: '',
          success: '',
        },
      };

    case TRANSACTION_ERROR_TO_PAY_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: '',
        },
      };
    case TRANSACTION_ERROR_TO_PAY_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: '',
          success: payload.success && 'success',
        },
        transactionErrorToPay: payload,
      };

    default:
      return {...state};
  }
};

export default firebaseReducer;
