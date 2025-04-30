import { useSelector } from "react-redux";
import React from 'react'

function AddRemove() {
    const product = useSelector((state) => state.products.data[0])
  return (
    <div>
      <h1>AddRemove</h1>
    </div>
  )
}

export default AddRemove
