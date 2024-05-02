import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const HandleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Log In</h2>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Username' /><br/>
        <input type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password' />
        <button onClick={HandleSubmit}>Login {username}</button>
    </div>
  )
}

export default Login