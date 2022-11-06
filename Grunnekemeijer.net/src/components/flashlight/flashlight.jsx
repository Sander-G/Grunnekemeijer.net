
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Wrapper, FlashlightButton} from './Flashlight.styled'
import flashlight from './../../assets/flashlight.png'

export default function Flashlight() {
  const [isOn, setIsOn] = useState('false');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    default: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75
    },
    text: {
      x: 0,
      y: 0
    }
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  return (
    <>  
    <Wrapper>
    <FlashlightButton onClick={()=>setIsOn(!isOn)}>
    <img src={flashlight} />
    <motion.div
       className={isOn? "off" : "on"}
       variants={variants}
       animate={cursorVariant}
     ></motion.div>
    </FlashlightButton>
    </Wrapper>
    </>
  )
}
