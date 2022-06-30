/* eslint-disable react/no-unescaped-entities */
import useSound from 'use-sound';
import themeSong from './Scooby-Doo.mp3';
import CustomButton from './CustomButton';

export default function ThemeSong() {
  const [play, { stop }] = useSound(themeSong);
  return (
    <div>
      <CustomButton onClick={play}> What's New Scooby Doo? </CustomButton>
      <CustomButton onClick={() => stop()}> Kill the mood </CustomButton>
    </div>
  );
}