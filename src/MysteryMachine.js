
export default function MysteryMachine({ gangMysteryMachine }) {
  return (
    <div className={gangMysteryMachine ? 'gang' : 'mysteryMachine'}>
      {
        gangMysteryMachine
          ? <img src="./Gang-Picture.png" alt="Picture of the meddling kids" />
          : <img src="./Mystery-Machine-Full.png" alt="Meddling kids driving away in the van"/>
      }
    </div>
  );
}