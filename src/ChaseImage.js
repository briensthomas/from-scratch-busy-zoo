
export default function ChaseImage({ chase }) {
  return (
    <p className="monster-chase-image">
      {chase === 'Daphne-Running' && <img src='./Daphne-Running.png' alt="Daphne running"/>}
      {chase === 'Scooby-Running' && <img src='./Scooby-Running.png' alt="Scooby running"/>}
      {chase === 'Velma-Running' && <img src='./Velma-Running.png' alt="Velma running"/>}
      {chase === 'Wraith-Chase' && <img src='./Wraith-Chase.png' alt="Wraith chasing"/>}

    </p>
  );
}



