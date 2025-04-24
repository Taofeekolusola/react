import React from 'react'
import buyIceCream  from './reduxStuff/iceCream/IceCreamAction'
import {connect} from 'react-redux'

function IceCreamShop(props) {
  return (
    <div>
          <h1>Number of IceCreams - { props.numOfIceCream }</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamShop)