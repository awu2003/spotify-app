import './App.css';
import Login from './login.js';
import Dashboard from './dashboard.js';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
