import React from 'react'

import './KeyPad.css';

export default function KeyPad(props) {
  const keys = [
    {
      keyCode:103,
      label: "7" 
    },
    {
      keyCode:104,
      label: "8" 
    },
    {
      keyCode:105,
      label: "9" 
    },
    {
      keyCode:100,
      label: "4" 
    },
    {
      keyCode:101,
      label: "5" 
    },
    {
      keyCode:102,
      label: "6" 
    },
    {
      keyCode:97,
      label: "1" 
    },
    {
      keyCode:98,
      label: "2" 
    },
    {
      keyCode:99,
      label: "3" 
    },
    {
      keyCode:96,
      label: "0" 
    },
    {
      keyCode:110,
      label: "." 
    },
    {
      keyCode:187,
      label: "=" 
    },
  ];
  
  const symbols = [
    {
      label: "⌫",
      keyCode: 8,
      value: "backspace"
    },
    {
      label: "÷",
      keyCode: 111,
      value: "/"
    },
    {
      label: "x",
      keyCode: 106,
      value: "*"
    },
    {
      label: "-",
      keyCode: 109,
      value: "-"
    },
    {
      label: "+",
      keyCode: 107,
      value: "+"
    },
  ];

  return (
    <div className="keypad">
      <div className="keypad_keys">
        {
          keys.map((item, index)=>(<p onClick={()=>props.handleKeyPress(item.keyCode, item.label)} key = {index}>{item.label}</p>)
        )}
      </div>

      <div className="keypad_symbols">
        {
          symbols.map((item, index)=>(<p onClick={()=>props.handleKeyPress(item.keyCode, item.value)} key = {index}>{item.label}</p>)
        )}
      </div>
    </div>
  )
}


