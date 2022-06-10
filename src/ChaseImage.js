
export default function ChaseImage({ chase }) {
  return (
    <p className="monster-chase-image">
      {chase === 'Daphne-Running' && <img src='./Daphne-Running.png' />}
      {chase === 'Scooby-Running' && <img src='./Scooby-Running.png' />}
      {chase === 'Velma-Running' && <img src='./Velma-Running.png' />}
      {chase === 'Wraith-Chase' && <img src='./Wraith-Chase.png' />}

    </p>
  );
}



