import React from 'react';
import { ChatRow } from '../compounds/ChatRow';

export const ChatPage = () => {
  let chatSecond = [
    { from: 'sai', to: 'tarun', msg: 'hi', index: '0' },
    { from: 'tarun', to: 'sai', msg: 'hi', index: '0.1' },
    {from : 'tarun', to:'sai',msg:'myan',index: '0.2'},
    { from: 'sai', to: 'tarun', msg: 'ela unnav', index: '1' },
    { from: 'tarun', to: 'sai', msg: 'bagunna', index: '1.1' },
  ];
  chatSecond = [
    { from: "tarun", to: "sai", msg: "see you later", index: "0" },
    { from: "sai", to: "tarun", msg: "how are you?", index: "0.1" },
    { from: "sai", to: "tarun", msg: "see you later", index: "0.2" },
    { from: "tarun", to: "sai", msg: "bye", index: "2" },
    { from: "sai", to: "tarun", msg: "not much", index: "2.1" },
    { from: "tarun", to: "sai", msg: "bye", index: "3" },
    { from: "tarun", to: "sai", msg: "see you later", index: "4" },
    { from: "sai", to: "tarun", msg: "hello", index: "4.1" },
    { from: "sai", to: "tarun", msg: "hello", index: "4.2" },
    { from: "sai", to: "tarun", msg: "see you later", index: "4.3" },
    // Continues...
    { from: "tarun", to: "sai", msg: "cool", index: "5" },
    { from: "tarun", to: "sai", msg: "hi", index: "6" },
    { from: "sai", to: "tarun", msg: "cool", index: "6.1" },
    { from: "tarun", to: "sai", msg: "cool", index: "5" },
    { from: "tarun", to: "sai", msg: "hi", index: "6" },
    { from: "sai", to: "tarun", msg: "cool", index: "6.1" }
];
  

  return (
    <div className="chat-bot">
      <div className="chat-logo">
        {/* Add logo or branding here */}
      </div>
      <div className="chat-body">
        {chatSecond.map((item) => {
          // Split the index and determine the chat position
          const [start, nextStart] = item.index.split('.');
          const position = nextStart ? 'left' : 'right';

          return <ChatRow key={item.index} position={position} msg={item.msg} />;
        })}
      </div>
    </div>
  );
};
