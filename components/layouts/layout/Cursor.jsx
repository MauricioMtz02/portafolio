import { useCursor } from "../../../hooks"

const Cursor = () => {
  const { position: { x, y }, size } = useCursor()

  return (
    <div 
      className="absolute z-50 w-16 h-16 pointer-events-none bg-transparent backdrop-invert clip-path-rounded-full transition"
      style={{
        // transform: `scale(${size}) translateX(${x}px) translateY(${y}px)`
        top: `${y-20}px`,
        left: `${x-20}px`,
        transform: `scale(${size})`
      }}
    ></div>
  )
}

export default Cursor