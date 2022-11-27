const colors = {
  primary: 'text-sky-400',
  secondary: 'text-pink-500',
  light: 'text-gray-100',
  dark: 'text-gray-700',
  white: 'text-white'
}

const P = ({children, color='light', className, title}) => {
  return (
    <p
      title={title}
      className={`${colors[color]} ${className} text-lg leading-9`}
    >
      {children}
    </p>
  )
}

export default P