import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"
export default function Login() {

    const { username, setUsername } = useState('');  
    const  {password, setPassword}  = useState(''); 
    const {setUser} = useContext(UserContext);
    
    const handleLogin = () => {

    
    }
  return (
   
      <div>
        <h2>
            Login Page 
        </h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username" />
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        placeholder="password" />
        <button onClick={handleLogin} >Login</button>
      </div>
    
  ) 
}
export default Login
