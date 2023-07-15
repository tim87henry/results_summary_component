import React from 'react'

const Results = () => {
  return (
    <div className='result'>
      <h2>Your Result</h2>
      <div className="marks">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <div className="remarks">
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default Results