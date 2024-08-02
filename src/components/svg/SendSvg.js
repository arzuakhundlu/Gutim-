import React, { Component } from 'react'

export class SendSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={20}
        height={20}
        viewBox="0 0 32 32"
      >
        <path
          d="M30.291 2.87 20.71 28.13c-.39 1.029-1.346 1.234-2.123.456L12.001 22c-.55-.55-.359-1.631.425-2.403l13.316-13.11c.784-.772.711-.856-.163-.187L10.588 17.784c-.873.669-2.224.58-3.002-.198l-4.172-4.172c-.778-.778-.573-1.733.456-2.124l25.26-9.581c1.029-.39 1.551.132 1.161 1.161zM8.707 20.121c-.389-.389-.707-.257-.707.293V25c0 .55.386.768.857.485l2.401-1.441c.472-.283.539-.833.15-1.222l-2.701-2.701z"
          style={{
            fill: "#fff",
          }}
        />
      </svg>
    )
  }
}

export default SendSvg