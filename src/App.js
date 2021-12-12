import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.css'
const App = () => {
  const [items, setItems] = useState([])
  // const [isVisible, setIsVisible] = useState(false)
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay })
      await next({ x: 0, opacity: 0.5, width: 100, height: 100 })
    },
    leave: { x: 100, y: 800, opacity: 0 },
  })
  return (
    <div className='app'>
      <button
        onClick={() => {
          setItems((v) =>
            v.length
              ? []
              : [
                  {
                    y: -100,
                    delay: 200,
                  },
                  {
                    y: 0,
                    delay: 400,
                  },
                  {
                    y: 100,
                    delay: 600,
                  },
                ]
          )
        }}
      >
        {items.length ? 'un-mount' : 'mount'}
      </button>
      <div className='container'>
        {transition((style, item) =>
          item ? <animated.div style={style} className='item' /> : ''
        )}
      </div>
    </div>
  )
}

export default App
