import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashBoard from './components/DashBord/AdminDashBoard'
import EmployeeDashBord from './components/DashBord/EmployeeDashBord'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import { useContext } from 'react';
function App() {
    const [user , setUser] = useState(null) ;  

    const [loggedInUserData , setLoggedInUserData] = useState(null) ; 
    
    const [userData , setuserData]  = useContext(AuthContext) 
    
    useEffect(()=>{
      const loggedInUser = localStorage.getItem('loggedInUser') 
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser) 
        setUser(userData.role) 
        setLoggedInUserData(userData.data)
      }
    } ,[]);

    const handleLogin =(email , password) =>{
          if(email == "admin@example.com" && password == "123"){
           setUser('admin')
           localStorage.setItem('loggedUser' , JSON.stringify({role :'admin'}))
          }else if(userData){
            const employee =  userData.find((e) =>email ==e.email && password == e.password)
           if(employee){
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedUser' , JSON.stringify({role :'employee' , data :employee}))
           }
          }else{
            alert("invalid credintials")            
          }
    }

    
  return (
    <>
  {!user ? (
  <Login handleLogin={handleLogin} />
) : user === "admin" ? (
  <AdminDashBoard changeUser={setUser} />
) : user === "employee" ? (
  <EmployeeDashBord changeUser={setUser} data={loggedInUserData} />
) : null}


    </>
  )
}

export default App
