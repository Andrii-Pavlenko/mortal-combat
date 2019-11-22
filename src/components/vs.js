import React, { useState  } from 'react';
import { useHistory } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import '../styles.css';

function Vs({ images, activeId, findFighter, findName, randomId }) {
  const history = useHistory();
  React.useEffect(() => {setTimeout(
    () => {history.push('/mc_choose_hero')}
    , 10000
  )}, [activeId, history])
  
  const [firstColor, setFirstColor] = useState('#000000')
  const [secondColor, setSecondColor] = useState('#000000')
  const [thirdColor, setThirdColor] = useState('#000000')
  const [fourthColor, setFourthColor] = useState('#000000')
  const [fifthColor, setFifthColor] = useState('#000000')
  const [sixthColor, setSixthColor] = useState('#000000')

  const changeColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.onkeydown = (e) => {
    if (e.keyCode === 81) {
      setFirstColor(changeColor());
    } else if (e.keyCode === 87) {
      setSecondColor(changeColor());
    } else if (e.keyCode === 69) {
      setThirdColor(changeColor());
    } else if (e.keyCode === 82) {
      setFourthColor(changeColor());
    } else if (e.keyCode === 84) {
      setFifthColor(changeColor());
    } else if (e.keyCode === 89) {
      setSixthColor(changeColor());
    }
  }  

  return (
    <div className="background">
      <div className="left">
        <div className="left_side"></div>
        <div className="left_container">
          <img src="./images/vs_dragon_left.gif" alt="left dragon" className="left_dragon"/>
          <img
            src={findFighter(images, activeId)}
            alt={findName(images, activeId)} 
            className="left_fighter" 
          />
        </div>
      </div>
      <div className="vs_center">
        <div className="vs_center_upper">
          <img src="./images/Battle_title.gif" alt="Battle" className="battle" />
          <img src="./images/1.jpg" alt="first" className="number" />
          <img src="./images/vs_word.gif" alt="vs" className="vs" />
        </div>
        <div className="vsCenter_lover">
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: firstColor }}></i> 
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: secondColor }}></i>    
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: thirdColor }}></i> 
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: fourthColor }}></i> 
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: fifthColor }}></i> 
          <i className="fa fa-fonticons fa-4x fonticon" style={{ color: sixthColor }}></i>
        </div>
      </div>
      <div className="right">        
        <div className="right_container">
          <img src="./images/vs_dragon_right.gif" alt="right dragon" className="right_dragon"/>
          <img src={randomId} alt={findName(images, activeId)} className="right_fighter" />
        </div>
        <div className="right_side"></div>
      </div>

    </div>
  )
}

export default Vs;