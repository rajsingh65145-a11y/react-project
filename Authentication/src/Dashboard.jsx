import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const Dashboard = () => {
    const { setisLoggedIn} = useAuth();        
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setisLoggedIn(false);                      // state ko kya karna hai?
        navigate('/login');                 // kaha navigate karna hai?
    }
    
    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard