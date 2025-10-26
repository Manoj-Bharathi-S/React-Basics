import React, { useContext,useRef } from 'react'
import { useState } from 'react';
import { dataContext } from './Home';

const Counter = () => {

    const data = useContext(dataContext)
    const [count, setCount] = useState(0);

    let refCount = useRef(0);

    // React's Batch updation prevents the value from updating twice
    // => this creates a function that takes the value and performs the operation
    function inc(){
        // setCount(count+1);
        refCount.current = refCount.current + 1;
    }

  return (
    <>
    <h1 className='mx-5'>{data}</h1>
    <div className='mx-5'>{count}</div>
    <button className='mx-5 btn btn-primary' onClick={inc}>Up</button>
    <button className='mx-5 btn btn-secondary' onClick={() => setCount(refCount.current)}>Upadate</button>
    </>
  )
}

export default Counter;