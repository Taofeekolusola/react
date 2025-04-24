import buyWater  from "./WaterAction";
import BUY_WATER  from "./WaterType";

const initialState = {
    numOfWater: 10
}
const WaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_WATER: return {
            ...state,
            numOfWater: state.numOfWater -1
        }
        default: return state
    }
}

export default WaterReducer