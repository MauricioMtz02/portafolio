const colors = {
  primary: 'text-sky-400',
  secondary: 'text-pink-500',
  light: 'text-gray-100',
  dark: 'text-gray-700'
}

const Label = ({children, htmlFor, className, color = 'light'}) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={`${colors[color]} ${className}`}
    >
      {children}
    </label>
  )
}

export default Label
