import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const Login = () => {
    const { setisLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = () => {
        setisLoggedIn(true);
        navigate('/dashboard');
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login