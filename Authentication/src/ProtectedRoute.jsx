import { Navigate } from 'react-router-dom'
import useAuth from './useAuth'

const ProtectedRoute = ({ children}) => {        // kya prop chahiye?
    const { isLoggedIn } = useAuth();                // kya nikalna hai?
    
    if (!isLoggedIn) {                                 // kya condition check karni hai?
        return <Navigate to="/login" />;           // kaha redirect karna hai?
    }
    
    return children;                                 // agar login hai, kya return karna hai?
}

export default ProtectedRoute