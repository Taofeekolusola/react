import React, {useState, useEffect} from 'react'


function Joke() {
    const [jokes, setJokes] = useState([null])

    const handleRefresh = () => {
        window.location.reload(); // Refreshes the current page
      };
    useEffect(() => {
        const fetchJokes = async () => {
            const res = await fetch('https://official-joke-api.appspot.com/jokes/random')
            const data = await res.json()
            setJokes(data)
            console.log(data)
        }
        fetchJokes()
    }, [])
  return (
    <div>
        <h3>Joke: </h3>
          {jokes ? (
              <ul>
                  <li>
                      {jokes.setup} ({jokes.punchline})
                  </li>
              </ul>
          ) : (
                  <p>Loading...</p>
          )
              
          }
          <button onClick={handleRefresh}>Get Another Joke</button>
    </div>
  )
}

export default Joke