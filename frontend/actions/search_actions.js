export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

export const requestSearch = (query) => ({
  type: REQUEST_SEARCH,
  query,
});

export const receiveResults = (results) => ({
  type: RECEIVE_RESULTS,
  results
});
