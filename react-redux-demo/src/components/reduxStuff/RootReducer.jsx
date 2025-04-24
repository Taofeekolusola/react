import { combineReducers } from 'redux'
import CakeReducer from './cake/CakeReducer'
import IceCreamReducer from './iceCream/IceCreamReducer'
import WaterReducer from './water/WaterReducer'

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    water: WaterReducer
})

export default rootReducer