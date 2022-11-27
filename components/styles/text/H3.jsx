const colors = {
  primary: 'text-sky-400',
  secondary: 'text-pink-500',
  light: 'text-gray-100',
  dark: 'text-gray-700'
}

const H3 = ({children, color = 'primary', className}) => {
  return (
    <h2
      className={`${colors[color]} text-2xl md:text-3xl font-bold ${className}`}
    >
      {children}
    </h2>
  )
}

export default H3