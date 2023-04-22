import React from 'react'

import './Header.css';

export default function Header() {
  return (
    <div className="header custom-scroll">
      <div className="header_history">
        <p>10+5</p>
        <p>10+5*93</p>
        <p>10+2</p>
        <p>10+2</p>
        <p>10+2</p>
        <p>10+2</p>
      </div>
      <br/>
      <div className="header_expression custom-scroll">
        <p>10+52+63+5+4+7+8+8+4+7+7+4+4</p>
      </div>
      <p className="header_result">149</p>
    </div>
  )
}
