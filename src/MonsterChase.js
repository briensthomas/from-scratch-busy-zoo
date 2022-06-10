import ChaseImage from './ChaseImage.js';

export default function MonsterChase({ monsterChase }) {
  return (
    <div className='monster-chase-list'>
      {monsterChase.map((chase, i) => 
        <ChaseImage key={chase + i} chase={chase} />)
      }
    </div>
  );
}
