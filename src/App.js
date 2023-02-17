import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);

  //AddUsers
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, 
        {name: uName, age: uAge, id: Math.random().toString()}
      ]
    })
  }

  //deleting Items 
  const deletedItems = (id) => {
    setUserList((prevUserList) => {
      return prevUserList.filter((item, index) => {
        return index !== id;
      })
    })
  } 
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}
        onDelete={deletedItems}
      />
    </div>
  );
}

export default App;
