import { useState } from "react"

export default function ColorBox({ colorsArray }) {
  const colorsCount = colorsArray.length;
const [color, setcolor] = useState(
  colorsArray[Math.floor(Math.random() * colorsCount)]
);

  return(
  <div 
  className="ColorBox" 
  style={{backgroundColor: color}} 
  onClick={() => {
    setcolor(colorsArray[Math.floor(Math.random() * colorsCount)])
    console.log(colorsArray[Math.floor(Math.random() * colorsCount)])
  }}
    
  ></div>
  
  );
}