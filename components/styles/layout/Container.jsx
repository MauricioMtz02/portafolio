const Container = ({children, type = ''}) => {
  
  const getType = () => {
    if(type === 'sm'){
      return ''
    }

    if(type === 'lg'){
      return 'lg:w-7/8 xl:w-5/6 2xl:w-5/6 min-[1600px]:w-4/6'
    }

    return 'lg:w-4/5 2xl:w-3/5'
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className={`h-full w-11/12 ${getType()}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container