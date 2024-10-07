// Selector for lead reducer.

/**
 * Get the status of the login.
 * @param  {Object} state reducer data for update hermes properties..
 */
export const getTermsConditions = state =>
  state.FirebaseReducer?.termsConditionsData;

export const getAnnouncementPrivacy = state =>
  state.FirebaseReducer?.announcementPrivacy;

export const getCalculator = state => state.FirebaseReducer?.calculator;

export const getCarousel = state => state.FirebaseReducer?.carousel;

export const getFrequentQuestions = state =>
  state.FirebaseReducer?.frequentQuestions;

export const getMantain = state => state.FirebaseReducer?.maintain;

export const getTransactionInProcess = state => state.FirebaseReducer?.transactionInProcess;

export const getTransactionErrorToPay = state => state.FirebaseReducer?.transactionErrorToPay;
