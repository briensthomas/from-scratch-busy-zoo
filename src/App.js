/* eslint-disable react/no-unescaped-entities */
import './App.css';
import MysteryMachine from './MysteryMachine.js';
import MonsterChase from './MonsterChase.js';

import spookyImg from './spookyBackground.jpg';
import { useState } from 'react';

import ThemeSong from './ThemeSong.js';


function App() {
  const [scoobySize, setScoobySize] = useState(5);
  const [shaggySize, setShaggySize] = useState(5);

  const [gangMysteryMachine, setGangMysteryMachine] = useState(true);

  const [monsterChase, setMonsterChase] = useState(['Daphne-Running', 'Scooby-Running', 'Velma-Running']);

  function handleAddDaphne() {
    monsterChase.push('Daphne-Running');

    setMonsterChase(monsterChase.slice());
  }

  function handleAddScooby() {
    monsterChase.push('Scooby-Running');

    setMonsterChase(monsterChase.slice());
  }

  function handleAddVelma() {
    monsterChase.push('Velma-Running');

    setMonsterChase(monsterChase.slice());
  }

  function handleAddWraith() {
    monsterChase.unshift('Wraith-Chase');
  
    setMonsterChase(monsterChase.slice());
  }



  return (
    <div className='background' style={{ backgroundImage: `url(${spookyImg})` }}>
      <header><h2>What's New Scooby Doo?</h2>
        <ThemeSong />
      </header>
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
      <div className='monster-chase'>
        <MonsterChase monsterChase={monsterChase} />
        <div className='monster-chase-buttons'>

          <button onClick={handleAddScooby}>Run, Scooby!</button>
          <button onClick={handleAddDaphne}>Run, Daphne!</button>
          <button onClick={handleAddVelma}>Run, Velma!</button>
          <button onClick={handleAddWraith}>Wraith, get those meddling kids!</button>
        </div>
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
