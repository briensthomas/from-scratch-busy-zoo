
export default function MysteryMachine({ gangMysteryMachine }) {
  return (
    <div className={gangMysteryMachine ? 'gang' : 'mysteryMachine'}>
      {
        gangMysteryMachine
          ? <img src="./Gang-Picture.png" alt="picture of the meddling kids" />
          : <img src="./Mystery-Machine-Full.png" alt="meddling kids driving away in the van"/>
      }
    </div>
  );
}