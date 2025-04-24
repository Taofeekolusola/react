import React, { useEffect, useState  } from 'react'
import axios from 'axios'

function Json() {
    const [users, setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUser(res.data)
                console.log('data', res.data)
            })
            .catch(error => {
                console.log('error', error)
            })
    }, [])
  return (
      <div>
          <h2>User identity</h2>
          <div>
              <ul>
              {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
              </ul>
          </div>
      
    </div>
  )
}

export default Json