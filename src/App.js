import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Admin from './Admin';
import BusyZoo from './BusyZoo';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BusyZoo />} />
          <Route exact path="admin" element={<Admin />} />

        </Routes>
      </div>
    </Router>
  );
}
  
export default App;