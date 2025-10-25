import React from 'react'
import { useState } from 'react';
const Counter = () => {

    const [count, setCount] = useState(0);

    // React's Batch updation prevents the value from updating twice
    // => this creates a function that takes the value and performs the operation
    function inc(){
        setCount(count =>count+1);
        setCount(count =>count+1);

    }

  return (
    <>
    <div className='mx-5'>{count}</div>
    <button className='mx-5' onClick={inc}>Up</button>
    </>
  )
}

export default Counter;