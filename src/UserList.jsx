import { useEffect, useState } from 'react';
import './UserList.css';
import axios from 'axios';

function UserList() {


const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          
          console.log(response.data)
          let allUsers = response.data.map(alluser=>alluser)

            setUsers(JSON.stringify(allUsers))            
            
          })
        .catch(error =>console.log(error, "Something went wrong!"))
        
      }, []);
      return(
       <div className='userlists'>
       <ul className='user'>
        <li><em style={{color: "blue", wordSpacing:"10px", letterSpacing:"5px",backgroundColor:"coral"}}>LIST OF USERS </em> = {users}</li>
       </ul>
       </div>
        )
    
    }

export default UserList;