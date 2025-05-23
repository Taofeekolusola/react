import React from 'react'
import buyCake  from './reduxStuff/cake/CakeAction'
import {connect} from 'react-redux'

function CakeShop(props) {
  return (
    <div>
          <h1>Number of Cakes - { props.numOfCakes }</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeShop)