import UserProvider from './Context/UserProvider'; // ✅ CORRECT FILE
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      <h2>React Context APIs Practice</h2>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
