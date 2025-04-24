const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}

//reducer function
// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream: 10
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecream: 10
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                ...state,
//                 numOfIcecream: state.numOfIcecream - 1
//             }
//         default:
//             return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
               ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
               ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        default:
            return state;
    }
}
//combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//store creation
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial State:", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()