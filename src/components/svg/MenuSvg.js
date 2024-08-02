import React, { Component } from 'react'

export class MenuSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
    )
  }
}

export default MenuSvg
