import { useState, createContext, useContext } from 'react';

const ZooContext = createContext();

export default function ZooProvider({ children }) {
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

  const stateAndSetters = {
    scoobySize, setScoobySize,
    shaggySize, setShaggySize,
    gangMysteryMachine, setGangMysteryMachine,
    monsterChase, setMonsterChase,
    handleAddDaphne,
    handleAddScooby,
    handleAddVelma,
    handleAddWraith
  };

  return <ZooContext.Provider value={stateAndSetters}>
    {children}
  </ZooContext.Provider>;
}

export function useZooContext() {
  return useContext(ZooContext);
}