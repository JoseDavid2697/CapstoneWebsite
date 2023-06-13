import { Navigate, Route, Routes} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const CapstoneRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path="/*" element={<Navigate to="/home/"/>}/>

    </Routes>
  )
}
