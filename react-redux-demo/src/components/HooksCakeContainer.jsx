import react from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyCake from './reduxStuff/cake/CakeAction'


const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num Of Cakes - { numOfCakes }</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;