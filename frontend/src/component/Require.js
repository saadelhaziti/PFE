import { useContext } from "react"
import { AuthContext } from "../AuthContex"
import { Navigate } from "react-router"




function Require({children}) {
    const authcontext=useContext(AuthContext)
  if(authcontext.auth.authenticated){
    return <Navigate to='/user'/>
  }
    return children
}
function Require2({children}) {
    const authcontext=useContext(AuthContext)
  if(!authcontext.auth.authenticated){
    return <Navigate to='/login'/>
  }
    return children
}


export  {Require,Require2}