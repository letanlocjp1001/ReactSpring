import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css'
const Form = () => {
  function ChainExample() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
    // ...
    return (
      <animated.div style={styles} className='AAA'>
        I will fade in and out
      </animated.div>
    )
  }
  return ChainExample()
}

export default Form
