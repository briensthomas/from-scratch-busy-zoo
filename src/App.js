import './App.css';
import MysteryMachine from './MysteryMachine.js';
import { useState } from 'react';



function App() {
  const [scoobySize, setScoobySize] = useState(5);
  const [shaggySize, setShaggySize] = useState(5);

  const [gangMysteryMachine, setGangMysteryMachine] = useState(true);


  return (
    <div className="App">
      <header><h2>Muscle Zoo</h2></header>
      <div className='size-increments'>
        <div className='left'>
          <div className='size-buttons'>
            <button onClick={() => setScoobySize(scoobySize + 1)}>
            Give Scooby a scooby snack!
            </button>

            <button onClick={() => setScoobySize(scoobySize - 1)}> 
              Ruh-roh Raggy!
            </button>
          </div>
          <img src='./Scooby-Doo.png' width={scoobySize * 10} />
        </div>

        <div className='right'>
          <div>
            <button onClick={() => setShaggySize(shaggySize + 1)}>
              Give Shaggy a scooby snack!
            </button>

            <button onClick={() => setShaggySize(shaggySize - 1)}>
              Like, zoinks Scoob! What was that?!
            </button>
          </div>
          <img src='./ShaggyRogers.png' width={shaggySize * 10}/>
        </div>
      </div>
{/* Gang in and out of the Mystery Machine */}
      <div className='mystery-machine'>
        <MysteryMachine gangMysteryMachine={gangMysteryMachine} />

        <button onClick={() => setGangMysteryMachine(!gangMysteryMachine)}>Get the Gang out of here!</button>
      </div>
{/* Monsters Chasing the gang */}
      <div>Monster Chase Parade

        <button>Run, Scooby!</button>
        <button>Run, Daphne!</button>
        <button>Run, Velma!</button>
        <button>Wraith, get those meddling kids!</button>
      </div>
      <p className='image-attribution'>
        By http://www.cartoonwatcher.com/scooby-doo/scooby-doo-characters.php, 
        Fair use, https://en.wikipedia.org/w/index.php?curid=28467908 <br></br>

        By Warner Bros. Animation - Warner Bros. Animation, Fair use, 
        https://en.wikipedia.org/w/index.php?curid=39714861 <br></br>

        By CBS - CBS, Fair use, https://en.wikipedia.org/w/index.php?curid=39714877 <br></br>

        By CBS - CBS, Fair use, https://en.wikipedia.org/w/index.php?curid=39714900 <br></br>

        By http://www.boomerangtv.co.uk/shows/scooby-doo/characters/shaggy, Fair use, 
        https://en.wikipedia.org/w/index.php?curid=29824637 <br></br>

      </p>
    </div>
  );
}

export default App;
