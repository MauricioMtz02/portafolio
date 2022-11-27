import { useContext } from 'react'
import { DBContext } from '../context'

const useDB = () => {
    return useContext(DBContext)
}

export default useDB