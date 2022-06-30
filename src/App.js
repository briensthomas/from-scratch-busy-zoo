import {
  Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Admin from './Admin';
import BusyZoo from './BusyZoo';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BusyZoo />} />
          <Route exact path="admin" element={<Admin />} />

        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Busy Zoo</Link></li>
            <li><Link to="admin">Admin</Link></li>

          </ul>
        </div>
      </Router>
    </div>
  );
}
  
export default App;