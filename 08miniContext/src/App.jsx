
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './componets/Login.jsx'
import Profile from './componets/Profile.jsx'

function App() {
  return (
    <UserContextProvider>
    <h1>Hello Context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    
  )
}

export default App
