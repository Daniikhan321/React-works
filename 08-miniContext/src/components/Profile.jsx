import { useContext } from "react"
import UserContext from "../Context/UserContext"
export default function Profile() {
  const { user } = useContext(UserContext);
 if (!user) {
    return <h2>Please login to view profile</h2>
  } 
  else {    
    return <div>
        <h2>WellCome {user.username }</h2>
    </div>
  }
}
