import {useEffect, useState} from "react";

export default function MouseCoors() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = (event) => {
    setMousePos({
      x: event.clientX,
      y: event.clientY
    })
  };

  useEffect(() => {
    console.log('addEventListener')
    window.addEventListener('mousemove', handleMouseMove); // виконати коли компонент додався с дом

    return () => {
      console.log('removeEventListener')
      window.removeEventListener('mousemove', handleMouseMove); // виконати коли компонент видалився з дому
    }
  }, []); // якщо не вказувати пустий масив залежностей взагалі, то він залежить від стану та від props


  return <div>
    Mouse x: {mousePos.x}<br />
    Mouse y: {mousePos.y}
  </div>
}