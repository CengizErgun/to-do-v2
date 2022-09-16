import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Login from './pages/login/Login';
import Todo from './pages/todo.js/Todo';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name) {
      setUser(name);
    }
  }, []);
  return (
    <>
    
      {user ? (
        <div>
          <Todo />
        </div>
      ) : (
        <div>
          <Login />
        </div>

      )}
    </>
  );
}

export default App;
