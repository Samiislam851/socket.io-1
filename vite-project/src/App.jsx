import React, { useEffect, useMemo, useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import io from 'socket.io-client'// Import io() from socket.io-client
import CountMsg from './countMsg'


function App() {
  const [message, setMessage] = useState(0)
  const [input, setInput] = useState('');
  const socket = io('http://localhost:3000/sell') // creates a socket instance, connects it. NOTE: Give the server address where socket.io server code is implemented  


  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected form here');
    })


    socket.on('MyEvent', (data) => {
      console.log('from Nsp ', data);
    })


    socket.on('disconnect', () => {
      console.log('disconnected form here');

    })

    return () => {
      socket.disconnect();
      console.log('Socket disconnected');
    };

  }, []);





  // useEffect(() => {
  //   // This effect runs whenever the 'message' state changes
  //   socket.on('message', (receivedMessage) => {
  //     setMessage(receivedMessage);
  //   });

  //   return () => {
  //     // Clean up any event listeners related to 'message'
  //     socket.off('message');
  //   };
  // }, [socket]); // Dependency array includes 'socket' to recreate the effect when 'socket' changes


  const sendData = () => {
    socket.emit('myEvent', input)
  }


  const disConnect = () => {
    socket.disconnect();
    console.log('Socket disconnected');
  }
  console.log(message);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{message}</h1>
      {/* <h1>        <CountMsg socket={socket} /></h1> */}
      <div className="card">


        <button onClick={() => { setMessage(message + 1) }}>Count</button>
        <button onClick={disConnect}>Disconnect</button>
        <p>
          Edit <code>srcApp.jsx</code> and save to test HMR
        </p>
      </div>
      <input type="text" placeholder='input value here..' onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={sendData}>Send</button>
    </>
  )
}

export default React.memo(App)

