import buyIcecream  from "./IceCreamAction";
import BUY_ICECREAM  from "./IceCreamType";

const initialState = {
    numOfIceCream: 10
}
const IceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }
        default: return state
    }
}

export default IceCreamReducer