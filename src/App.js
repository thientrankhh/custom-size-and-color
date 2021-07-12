import './App.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ChangeColor from './components/ChangeColor';
import ChangeSize from './components/ChangeSize';
import Header from './components/Header';
import Result from './components/Result';

function App() {
  const [size, setSize] = useState(12);
  const [colors, setColors] = useState([
    {
      color: 'red',
      css : 'danger'
    },
    {
      color: 'green',
      css : 'success'
    },
    {
      color: 'blue',
      css : 'primary'
    },
    {
      color: 'yellow',
      css : 'warning'
    }
  ]);

  const [colorDefault, setColorDefault] = useState("black");

  const changeSize = (operator) => {
    if (operator == "+") {
      setSize(size + 2);
    } else {
      setSize(size -2);
    }

    // const css = React.findDOMNode(".result p").css("font-size: "+ size);
  }

  const changeColor = (color) => {
    setColorDefault(color);
  }

  return (
    <div className="container">
        <Header />
        <div className="row change">
          <div className="col-md-6 float-left change-size">
            <ChangeSize size={size} changeSize={changeSize} /> 
          </div>
          <div className="col-md-6 change-color">
            <ChangeColor colors = {colors} changeColor={changeColor} />
          </div>
        </div>
        <Result size={size} colorDefault={colorDefault}/>
    </div>
  );
}

export default App;
