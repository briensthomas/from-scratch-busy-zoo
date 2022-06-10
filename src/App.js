import './App.css';
import { useState } from 'react';

function App() {
  const [bicepSize, setBicepSize] = useState(5);
  const [quadSize, setQuadSize] = useState(5);

  return (
    <body className="App">
      <header><h2>Muscle Zoo</h2></header>
      <div className='muscle-competition'>
        <div className='left'>
          <img src='https://place-puppy.com/300x300' />
          <button>Left Animal</button>
        </div>
        <div className='right'>
          <img src='https://place-puppy.com/300x300' />
          <button>Right Animal</button>
        </div>
      </div>
      

      <div>Open/Closed

      </div>

      <div>Animal Parade

      </div>
    </body>
  );
}

export default App;
