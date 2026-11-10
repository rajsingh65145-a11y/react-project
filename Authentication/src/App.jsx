import  { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthContext from './AuthContext'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    
    return (
        <AuthContext.Provider value={{isLoggedIn, setisLoggedIn}}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </AuthContext.Provider>
    );
}

export default App