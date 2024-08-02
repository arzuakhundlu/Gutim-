import React, { Component } from 'react'

export class RightSvg extends Component {
  render() {
    const {width = 36, height = 36, color="#bebebe"} = this.props;
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className="icon"
        transform="rotate(180)"
        viewBox="0 0 1024 1024"
        fill={color}
        style={{ minWidth:`${width}px` }}
      >
        <path d="M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
      </svg>
    )
  }
}

export default RightSvg
