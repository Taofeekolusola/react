import React from 'react'
import buyWater  from './reduxStuff/water/WaterAction'
import {connect} from 'react-redux'

function WaterShop(props) {
  return (
    <div>
          <h1>Number of Waters - { props.numOfWater }</h1>
        <button onClick={props.buyWater}>Buy Water</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfWater: state.water.numOfWater
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyWater: () => dispatch(buyWater())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaterShop)