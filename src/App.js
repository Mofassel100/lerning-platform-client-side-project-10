
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Context/UseContext';
import Routes from './Routes/Routes';

function App() {
  const {theme}= useContext(AuthContext)
  return (
    <div className={`App ${theme}`}>
  <Routes></Routes>

    </div>
  );
}

export default App;
