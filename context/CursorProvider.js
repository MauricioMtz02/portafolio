import { useState, useEffect, createContext } from 'react'

const CursorContext = createContext()

const CursorProvider = ({children}) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    size: 1
  })
  const [size, setSize] = useState(1)

  useEffect(() => {
    const followMouse = () => {
      document.addEventListener('mousemove', ({pageX, pageY}) => {
        setPosition({
          ...position,
          x: pageX,
          y: pageY
        })
      })

      const cursorHover = document.querySelectorAll('.cursor-hover')
      cursorHover.forEach(c => {
        c.addEventListener('mouseenter', () => {
          setSize(2)
        })

        c.addEventListener('mouseleave', () => {
          setSize(1)
        })
      })
    }

    followMouse()
  }, [])

  return(
    <CursorContext.Provider
      value={{
        position,
        size
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export {
  CursorProvider
}

export default CursorContext