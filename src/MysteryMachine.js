
export default function MysteryMachine({ gangMysteryMachine }) {
  return (
    <div className={gangMysteryMachine ? 'gang' : 'mysteryMachine'}>
      {
        gangMysteryMachine
          ? <img src="./Gang-Picture.png" />
          : <img src="./Mystery-Machine-Full.png" />
      }
    </div>
  );
}