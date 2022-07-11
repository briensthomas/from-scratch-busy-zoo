import ChaseImage from './ChaseImage.js';
import { useZooContext } from './ZooProvider.js';

export default function MonsterChase() {
  const { monsterChase } = useZooContext();
  return (
    <div className='monster-chase-list'>
      {monsterChase.map((chase, i) => 
        <ChaseImage key={chase + i} chase={chase} />)
      }
    </div>
  );
}
