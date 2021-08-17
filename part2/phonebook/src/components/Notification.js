import React from 'react';

const Notification = ({message}) => {
    
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    return message.message == null 
    ?  null
    : (
        <div style={message.type === 'success'? successStyle : errorStyle}>
            {message.message}
        </div>
    )
    
}

export default Notification;