import React from 'react';
import data from '../assets/data';

const Subject = (props) => {
  let classes = "subject "+props.item.classname; 
  return (
    <div className={classes}>
      <div>
        <img src={props.item.icon} alt=""></img>
        <h3>{props.item.category}</h3>
      </div>
      <p><b>{props.item.score}</b> / 100</p>
    </div>
  )
}

const Summary = () => {
  return (
    <div className='summary'>
      <h2>Summary</h2>
      {data.map((item) =>
        <Subject item={item} />)
      }
      <button className='continue'>Continue</button>
    </div>
  )
}

export default Summary