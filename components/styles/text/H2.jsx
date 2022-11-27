const colors = {
  primary: 'text-sky-400',
  secondary: 'text-pink-500',
  light: 'text-gray-100',
  dark: 'text-gray-700'
}

const H2 = ({children, color = 'primary', className}) => {
  return (
    <h2
      className={`${colors[color]} text-3xl md:text-4xl font-bold ${className}`}
    >
      {children}
    </h2>
  )
}

export default H2