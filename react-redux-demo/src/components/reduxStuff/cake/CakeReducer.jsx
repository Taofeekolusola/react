import buyCake  from "./CakeAction";
import BUY_CAKE  from "./CakeType";

const initialState = {
    numOfCakes: 10
}
const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

export default CakeReducer