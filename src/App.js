import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Admin from './Admin';
import BusyZoo from './BusyZoo';


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BusyZoo />} />
          <Route exact path="/admin" element={<Admin />} />

        </Routes>
      </div>
    </Router>
  );
}
  
export default App;