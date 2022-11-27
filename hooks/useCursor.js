import { useContext } from 'react'
import { CursorContext } from '../context'

const useCursor = () => {
    return useContext(CursorContext)
}

export default useCursor