import Card from "../UI/Card"
import classes from './UserList.module.css'

function UserList(props) {
  return (
    <div>
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>    
    </div>
  )
}

export default UserList