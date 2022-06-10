/* eslint-disable react/no-unescaped-entities */
import useSound from 'use-sound';
import themeSong from './Scooby-Doo.mp3';

export default function ThemeSong() {
  const [play, { stop }] = useSound(themeSong);
  return (
    <div>
      <button onClick={play}> What's New Scooby Doo? </button>
      <button onClick={() => stop()}> Kill the mood </button>
    </div>
  );
}