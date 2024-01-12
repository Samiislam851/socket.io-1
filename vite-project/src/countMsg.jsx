import React, { useEffect, useState } from 'react';

const CountMsg = ({ socket }) => {
    const [state, setState] = useState('');


    // useEffect(() => {



    //     socket.on('myEvent', (message) => {
    //         console.log(message.data);
    //         setState(message.data)
    //     })

    //     return () => {
    //         socket.off('myEvent', (message) => {
    //             console.log(message.data);
    //             setState(message.data)
    //         })
    //     };
    // }, [socket]);

    // useEffect(() => {
    //     socket.on('myBroadcastEvent', (data) => {
    //         console.log(data);
    //     })
    //     return () => {
    //         socket.off('myBroadcastEvent', (data) => {
    //             console.log(data);
    //         })
    //     };
    // }, [socket]);

    // useEffect(() => {
    //     socket.on('myevent2', (data) => {
    //         console.log(data);
    //     })
    //     return () => {
    //         socket.off('myevent2', (data) => {
    //             console.log(data);
    //         })
    //     };
    // }, [socket]);


    return (
        <div>
            inside count message
            {state}
        </div>
    );
}

export default CountMsg;
