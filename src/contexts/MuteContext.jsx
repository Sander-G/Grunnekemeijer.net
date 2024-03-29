import React, { createContext, useState, useEffect } from 'react';
import Howler from 'howler';
import PropTypes from 'prop-types';

const soundFiles = ['/assets/sounds/tick.mp3', '/assets/sounds/clickTone.mp3', '/assets/sounds/interfaceTap.mp3', '/assets/sounds/staticBuzz.mp3'];

export const MuteContext = createContext();

export function MuteProvider(props) {
  const [sounds] = useState(
    soundFiles.map(
      (src) =>
        new Howler.Howl({
          src,
          autoplay: false,
          loop: false,
          volume: 0.1,
        })
    )
  );

  MuteProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [isMuted, setIsMuted] = useState(true);
  sounds.forEach((sound) => sound.mute(isMuted));

  useEffect(() => {
    const storedIsMuted = localStorage.getItem('isMuted');
    if (storedIsMuted !== null) {
      setIsMuted(storedIsMuted === 'true');
    }
  }, []);

  const toggleMute = () => {
    const newIsMuted = !isMuted;
    setIsMuted(newIsMuted);
    localStorage.setItem('isMuted', newIsMuted);
    sounds.forEach((sound) => sound.mute(newIsMuted));
  };

  return <MuteContext.Provider value={{ isMuted, toggleMute, sounds }}>{props.children}</MuteContext.Provider>;
}
