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
    
    const authData  = useContext(AuthContext) 
    
    // useEffect(() =>{
    //  if(authData){
    //   const loggedInUser = localStorage.getItem('loggedInUser') ;
    //   if(loggedInUser){
    //     setUser(loggedInUser.role) ; 
    //   }
    //  } 
    // } ,[authData]) ;

    const handleLogin =(email , password) =>{
          if(email == "admin@example.com" && password == "123"){
           setUser('admin')
           localStorage.setItem('loggedUser' , JSON.stringify({role :'admin'}))
          }else if(authData){
            const employee =  authData.employees.find((e) =>email ==e.email && password == e.password)
           if(employee){
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedUser' , JSON.stringify({role :'employee'}))
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
  <AdminDashBoard />
) : user === "employee" ? (
  <EmployeeDashBord data={loggedInUserData} />
) : null}


    </>
  )
}

export default App
