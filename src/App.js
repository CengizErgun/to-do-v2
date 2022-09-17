import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Login from './pages/login/Login';
import Todo from './pages/todo.js/Todo';

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
          <Todo user = {user} handleUser = {(data) => handleUser(data)}/>
        </div>
      ) : (
        <div >
          <Login handleUser = {(data) => handleUser(data)}/>
        </div>

      )}
    </>
  );
}

export default App;
