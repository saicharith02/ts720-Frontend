import React from 'react'

export const ChatRow = ({position,msg}) => {
  return (
    <div>
        <div className={`chat-${position}`}>
            {msg}
        </div>
    </div>
  )
}
