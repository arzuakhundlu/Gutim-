import React, { Component } from 'react'

export class UserSvg extends Component {
  render() {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={14}
      viewBox="-5 0 32 32"
       fill='#E85D39'
    >
      <title>{"user"}</title>
      <path
        fill="#E85D39"
        fillRule="evenodd"
        d="M11 20c4.971 0 9-4.478 9-10S15.971 0 11 0 2 4.478 2 10s4.029 10 9 10Zm8.703-2.681C17.691 20.161 14.546 22 11 22c-3.546 0-6.691-1.839-8.703-4.681C.904 18.411 0 20.091 0 22v4a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6v-4c0-1.909-.904-3.589-2.297-4.681Z"
      />
    </svg>
    )
  }
}

export default UserSvg
