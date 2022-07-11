/* eslint-disable react/no-unescaped-entities */
import './App.css';
import MysteryMachine from './MysteryMachine.js';
import MonsterChase from './MonsterChase.js';
import CustomButton from './CustomButton';
import spookyImg from './cemetery.jpg';
import { useZooContext } from './ZooProvider.js';

import ThemeSong from './ThemeSong.js';


function BusyZoo() {
  const {
    scoobySize, setScoobySize,
    shaggySize, setShaggySize,
    gangMysteryMachine, setGangMysteryMachine,
    handleAddDaphne, handleAddScooby,
    handleAddVelma, handleAddWraith
  } = useZooContext();

  return (
    <div className='background' style={{ backgroundImage: `url(${spookyImg})` }}>
      <header><h2>What's New Scooby Doo?</h2>
        <ThemeSong />
      </header>
      <div className='size-increments'>
        <div className='left'>
          <div className='size-buttons'>
            <CustomButton onClick={() => setScoobySize(scoobySize + 1)}>
            Give Scooby a scooby snack!
            </CustomButton>

            <CustomButton onClick={() => setScoobySize(scoobySize - 1)}> 
              Ruh-roh Raggy!
            </CustomButton>
          </div>
          <img src='./Scooby-Doo.png' width={scoobySize * 10} />
        </div>

        <div className='right'>
          <div>
            <CustomButton onClick={() => setShaggySize(shaggySize + 1)}>
              Give Shaggy a scooby snack!
            </CustomButton>

            <CustomButton onClick={() => setShaggySize(shaggySize - 1)}>
              Like, zoinks Scoob! What was that?!
            </CustomButton>
          </div>
          <img src='./ShaggyRogers.png' width={shaggySize * 10}/>
        </div>
      </div>

      {/* Gang in and out of the Mystery Machine */}
      <div className='mystery-machine'>
        <MysteryMachine gangMysteryMachine={gangMysteryMachine} />

        <CustomButton onClick={() => setGangMysteryMachine(!gangMysteryMachine)}>Get the Gang out of here!</CustomButton>
      </div>
    
      {/* Monsters Chasing the gang */}
      <div className='monster-chase'>
        <MonsterChase />
        <div className='monster-chase-buttons'>

          <CustomButton onClick={handleAddScooby}>Run, Scooby!</CustomButton>
          <CustomButton onClick={handleAddDaphne}>Run, Daphne!</CustomButton>
          <CustomButton onClick={handleAddVelma}>Run, Velma!</CustomButton>
          <CustomButton onClick={handleAddWraith}>Wraith, get those meddling kids!</CustomButton>
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

export default BusyZoo;
