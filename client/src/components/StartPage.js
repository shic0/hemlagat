import React, { useState, useEffect } from 'react'


const StartPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <h2>Body borjar här</h2>
      <h4>Some text</h4>
      <div className="App-header">
          <h1>{!data ? "Loading..." : data}</h1>
        </div>
    </>
  )
}

export default StartPage