import Link from "next/link"

const colors = {
  primary: 'bg-sky-400 hover:bg-sky-500 text-gray-900',
  light: 'bg-gray-100 hover:bg-gray-200'
}

const Button = ({children, className, color = 'primary', href, type = 'button', onClick}) => {
  const style = `cursor-hover px-6 py-1 rounded-md font-semibold text-center ${colors[color]} ${className}`

  if(href) return (
    <Link className={style} href={href}>
      {children}
    </Link>
  )

  return (
    <button type={type} onClick={onClick} className={style}>
      {children}
    </button>
  )
}

export default Button