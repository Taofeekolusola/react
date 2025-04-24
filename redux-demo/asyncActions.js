const redux = require('redux');
const { createStore, applyMiddleware } = redux;
const { thunk } = require('redux-thunk');
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
};

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.name);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUsers());

// const redux = require('redux');
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunk = require('redux-thunk').default; // ✅ NOTE: .default is REQUIRED
// const axios = require('axios');

// const initialState = {
//   loading: false,
//   users: [],
//   error: ''
// };

// const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
// const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });
// const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS_REQUEST:
//       return { ...state, loading: true };
//     case FETCH_USERS_SUCCESS:
//       return { loading: false, users: action.payload, error: '' };
//     case FETCH_USERS_FAILURE:
//       return { loading: false, users: [], error: action.payload };
//     default:
//       return state;
//   }
// };

// const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };

// // ✅ Make sure thunk is a function before passing it
// console.log(typeof thunk); // should print "function"

// const store = createStore(reducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(fetchUsers());