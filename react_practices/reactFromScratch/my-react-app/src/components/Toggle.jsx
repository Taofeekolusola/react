import React from 'react'
import { useState } from 'react'

function Toggle() {
const [subscribe, setSubscribe] = useState(true)
  return (
      <div>
          
          <button onClick={() => setSubscribe(!subscribe)}>
              {subscribe ? 'Hide' : 'Display' }
          </button> 
          {subscribe ? <>This is a subscribed User</> : <>This user is not subscribed</>}
    </div>
  )
}

export default Toggle
