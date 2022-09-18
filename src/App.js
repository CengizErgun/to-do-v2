import { useEffect, useState } from 'react';
import Login from './pages/login/Login';
import Todo from './pages/todo/Todo';
import './App'

function App() {
  const [user, setUser] = useState(null)
  const handleUser = (data) => {
    setUser(data)
  }
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name != null) {
      setUser(name);
    }
  }, [user]);
  return (
    <>    
      {user ? (
        <div>
          <Todo user = {user} handleUser = {handleUser}/>
        </div>
      ) : (
        <div >
          <Login handleUser = {handleUser}/>
        </div>
      )}
    </>
  );
}

export default App;
