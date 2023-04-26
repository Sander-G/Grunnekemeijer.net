import React, { useContext, useState, useEffect } from 'react';
import { MuteContext } from '../../contexts/MuteContext';

import { Container, G, R, U, N, N2, E, E2, E3, E4, K, M, I, J, R2, DotNet } from './NameDiv.styled';

export default function NameDiv() {
  const { sounds, isMuted } = useContext(MuteContext);
  const [hoveredLetter, setHoveredLetter] = useState(null);

  useEffect(() => {
    let timeout;

    if (!hoveredLetter) {
      timeout = setTimeout(() => {
        setHoveredLetter(null);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [hoveredLetter, setHoveredLetter]);

  function handleTouchStart() {
    if (!hoveredLetter) {
      setHoveredLetter(null);
    }
  }

  function handleTouchMove(event) {
    const { clientX, clientY } = event.touches[0];
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.tagName === 'div' && element.textContent === 'nameDiv') {
      if (!hoveredLetter) {
        setHoveredLetter('nameDiv');
      }
    } else {
      if (element && element.tagName === 'P' && element.textContent === 'G') {
        if (!hoveredLetter) {
          setHoveredLetter('G');
        }
      } else {
        if (element && element.tagName === 'P' && element.textContent === 'R') {
          if (!hoveredLetter) {
            setHoveredLetter('R');
          }
        } else {
          if (element && element.tagName === 'P' && element.textContent === 'U') {
            if (!hoveredLetter) {
              setHoveredLetter('U');
            }
          } else {
            if (element && element.tagName === 'P' && element.textContent === 'N') {
              if (!hoveredLetter) {
                setHoveredLetter('N');
              }
            } else {
              if (element && element.tagName === 'P' && element.textContent === 'N2') {
                if (!hoveredLetter) {
                  setHoveredLetter('N2');
                }
              } else {
                if (element && element.tagName === 'P' && element.textContent === 'E') {
                  if (!hoveredLetter) {
                    setHoveredLetter('E');
                  }
                } else {
                  if (element && element.tagName === 'P' && element.textContent === 'K') {
                    if (!hoveredLetter) {
                      setHoveredLetter('K');
                    }
                  } else {
                    if (element && element.tagName === 'P' && element.textContent === 'E2') {
                      if (!hoveredLetter) {
                        setHoveredLetter('E2');
                      }
                    } else {
                      if (element && element.tagName === 'P' && element.textContent === 'M') {
                        if (!hoveredLetter) {
                          setHoveredLetter('M');
                        }
                      } else {
                        if (element && element.tagName === 'P' && element.textContent === 'E3') {
                          if (!hoveredLetter) {
                            setHoveredLetter('E3');
                          }
                        } else {
                          if (element && element.tagName === 'P' && element.textContent === 'I') {
                            if (!hoveredLetter) {
                              setHoveredLetter('I');
                            }
                          } else {
                            if (element && element.tagName === 'P' && element.textContent === 'J') {
                              if (!hoveredLetter) {
                                setHoveredLetter('J');
                              }
                            } else {
                              if (element && element.tagName === 'P' && element.textContent === 'E4') {
                                if (!hoveredLetter) {
                                  setHoveredLetter('E4');
                                }
                              } else {
                                if (element && element.tagName === 'P' && element.textContent === 'R') {
                                  if (!hoveredLetter) {
                                    setHoveredLetter('R');
                                  }
                                } else {
                                  setHoveredLetter(null);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function handleTouchEnd() {
    setHoveredLetter(null);
  }

  return (
    <Container
      className='nameDiv'
      onTouchStart={() => {
        if (!isMuted) {
          sounds[3].play();
          sounds[3].loop(true);
        }
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        sounds[3].stop();
      }}
      onMouseEnter={() => {
        if (!isMuted) {
          sounds[3].play();
          sounds[3].loop(true);
        }
        setHoveredLetter(null);
      }}
      onMouseLeave={() => {
        sounds[3].stop();
        setHoveredLetter(false);
      }}
    >
      <G
        className={hoveredLetter === 'G' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('G');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        G
      </G>
      <R
        className={hoveredLetter === 'R' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('R');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        R
      </R>
      <U
        className={hoveredLetter === 'U' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('U');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        U
      </U>
      <N
        className={hoveredLetter === 'N' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('N');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        N
      </N>
      <N2
        className={hoveredLetter === 'N2' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('N2');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        N
      </N2>
      <E
        className={hoveredLetter === 'E' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('E');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        E
      </E>
      <K
        className={hoveredLetter === 'K' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('K');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        K
      </K>
      <E2
        className={hoveredLetter === 'E2' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('E2');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        E
      </E2>
      <M
        className={hoveredLetter === 'M' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('M');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        M
      </M>
      <E3
        className={hoveredLetter === 'E3' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('E3');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        E
      </E3>
      <I
        className={hoveredLetter === 'I' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('I');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        I
      </I>
      <J
        className={hoveredLetter === 'J' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('J');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        J
      </J>
      <E4
        className={hoveredLetter === 'E4' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('E4');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        E
      </E4>
      <R2
        className={hoveredLetter === 'R2' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('R2');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        R
      </R2>
      <DotNet
        className={hoveredLetter === 'DotNet' ? 'hovered' : ''}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          !isMuted && sounds[2].play();
          setHoveredLetter('DotNet');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        .NET
      </DotNet>
    </Container>
  );
}