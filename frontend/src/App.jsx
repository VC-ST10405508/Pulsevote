import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h2>Welcome to PulseVote</h2>
      <p>{data ? data : "Loading..."}</p>
    </>
  )
}

export default App