import { createContext } from 'react'
import { listRoles } from '../data'

const DBContext = createContext()

const DBProvider = ({children}) => {
  const roles = listRoles

  const getRolById = (id) => {
    return roles.filter(rol => rol.id === id)[0]  
  }

  return(
    <DBContext.Provider
      value={{
        roles,
        getRolById
      }}
    >
      {children}
    </DBContext.Provider>
  )
}

export {
  DBProvider
}

export default DBContext